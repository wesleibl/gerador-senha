import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '@/src/hooks/useStorage';
import { PasswordItem } from './components/passwordItem'

export function Passwords () {
    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    const confirmAction = (item) => {
        Alert.alert(
            "Confirmar exclusão da senha?",
            "Você tem certeza que deseja continuar?",
            [
            { text: "Cancelar", onPress: () => console.log("Ação cancelada"), style: "cancel" },
            { text: "Sim", onPress: () => handleDeletePassword(item) }
            ],
            { cancelable: false }
        );
    };

    async function handleDeletePassword(item) {
        const passwords = await removeItem("@pass", item);
        setListPasswords(passwords);
    }

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass");
            
            setListPasswords(passwords)
        }

        loadPasswords();
    }, [focused])

    return (
        <SafeAreaView style={{ flex:1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
            <View style={styles.content}>
                <FlatList 
                    data={listPasswords}
                    keyExtractor={ (item) => String(item)}
                    renderItem={ ({ item }) => <PasswordItem data={item} removePassword={ () => confirmAction(item)}/>}
                    style={{flex: 1, paddingTop: 14}}
                />
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        padding: 14,
        paddingTop: 58
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF"
    },
    content: {
        flex: 1,
        paddingHorizontal: 14
    }
})
