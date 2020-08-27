import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        // o navigator abaixo não esta entre a tag <NavigationContainer> pq ele ficará dentro dessa tag no arquivo AppStack.tsx
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                //cor de fundo da aba quando ela não estiver ativa
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                //cor do texto quando a aba não estiver selecionada
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen
                name="TeacherList"
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            //usando a opção size que desestruturamos dos parâmetros, consego aumentar o ícone
                            //se estiver selecionado a aba (focused), cor roxa, se não a cor padrão
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />
            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            //usando a opção size que desestruturamos dos parâmetros, consego aumentar o ícone
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />
        </Navigator>
    )
}

export default StudyTabs;
