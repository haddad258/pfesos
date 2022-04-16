import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Platform, View, Alert, Text} from 'react-native';
//import Spinner from 'react-native-loading-spinner-overlay';
// import {getStatusBarHeight} from 'react-native-status-bar-height';


//import HomeTabScreen from './HomeTabScreen';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    // DrawerMenuItem Enum
    static DrawerMenuItem = {
        Home: 0,
        Profile: 1,
        Booking: 2,
        About: 3,
        Locations: 4,
        ContactUs: 5,
        Reports: 6,
        Logout: 7,
    };

    constructor(props){
        super(props);
    }

    state={
        spinner: false,
        //////////////
        drawerOpen: false,
    };

    closeDrawer = (menuItemIdx) => {
        this._drawer.close();

        if (menuItemIdx == HomeScreen.DrawerMenuItem.Logout) {
            Alert.alert(
                'MedSpa',
                'Do you want to log out now?',
                [{
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => {
                        console.log('Logout cancel');
                    }
                },{
                    text: 'OK',
                    onPress: () => {
                        this.setState({spinner: true}, () => {
                            console.log("signout")
                            // firebase.auth()
                            //     .signOut()
                            //     .then(() => {
                            //         this.setState({spinner: false}, ()=> {
                            //             this.props.navigation.navigate('Landing');
                            //         });
                            //     });
                        });
                    }
                },],
                {cancelable: false}
            );
        } else {
            switch (menuItemIdx) {
                case HomeScreen.DrawerMenuItem.Profile:
                    this.props.navigation.navigate('Profile');
                    break;
                case HomeScreen.DrawerMenuItem.Booking:
                    this.props.navigation.navigate('Booking');
                    break;
                case HomeScreen.DrawerMenuItem.About:
                    this.props.navigation.navigate('About');
                    break;
                case HomeScreen.DrawerMenuItem.Locations:
                    this.props.navigation.navigate('Locations');
                    break;
                case HomeScreen.DrawerMenuItem.ContactUs:
                    this.props.navigation.navigate('Contact');
                    break;
                case HomeScreen.DrawerMenuItem.Reports:
                    this.props.navigation.navigate('Reports');
                    break;
                default:
                    break;
            }
            console.log(menuItemIdx);
        }
    };

    onTakePhoto = () => {
        this.props.navigation.navigate("TakePhoto");
    };

    onAddNew = (dateStamp, index) => {
        const nav = ['AddEditFood', 'AddEditWater', 'AddEditWeightInch'];
        this.props.navigation.navigate(nav[index], {dateStamp: dateStamp, option: 'Add'});
    };

    onEdit = (dateStamp, index, itemKey) => {
        const nav = ['AddEditFood', 'AddEditWater', 'AddEditWeightInch'];
        this.props.navigation.navigate(nav[index], {dateStamp: dateStamp, option: 'Edit', itemKey: itemKey});
    };

    openDrawer = () => {
        this._drawer.open()
    };

    render() {
        return (
            <View style={[styles.container]}>
               <Text>tt </Text>
             {/*  */}
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FFAA',
    }
});

const drawerStyles = EStyleSheet.create({
});