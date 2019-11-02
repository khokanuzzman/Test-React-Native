import React, { Component } from 'react';
import { Text, View, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import Styles from '../styles/Styles';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
// import { TouchableOpacity } from 'react-native-gesture-handler';

class Pending extends Component {
    state = {
        isModalVisible: false
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    actionWork = () => {
        console.log('button pressed');
    }

    render() {
        return (
            
            <ScrollView style={Styles.container}>
                <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>  
                <View style={Styles.container}>
                    <Text>Test textX</Text>
                </View>
                </LinearGradient>
                <View style={{ flex: 1 }}>
                    <Button title="Show modal" onPress={this.toggleModal} />
                    <Modal isVisible={this.state.isModalVisible}
                        customBackdrop={<View style={Styles.modalBackground} />}
                        onSwipeComplete={() => this.setState({ isVisible: false })}
                        swipeDirection="left">
                        <View style={Styles.modal}>
                            <View style={Styles.modalHeader}>
                                <View style={Styles.modalHeaderLeft}></View>
                                <View>
                                    <TouchableHighlight style={Styles.closeModal, Styles.modalHeaderRight}>
                                        <Text style={Styles.closeIcon} onPress={this.toggleModal} >X</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <View style={Styles.modalContent}>

                               <TouchableOpacity style={Styles.modalContentList}>
                               <LinearGradient 
                                colors={['#4c669f', '#3b5998', '#192f6a']}>
                                <Text>
                                    Simple Linear Gradient Backgrount
                                </Text>
                                </LinearGradient>
                                </TouchableOpacity>
                               <TouchableOpacity style={Styles.modalContentList}>
                                    <View>
                                        <Text style={Styles.modalContentListStyle} onPress={this.actionWork} >Option Threw</Text>
                                    </View>
                                </TouchableOpacity>
                               <TouchableOpacity style={Styles.modalContentList}>
                                    <View>
                                        <Text style={Styles.modalContentListStyle} onPress={this.actionWork} >Option Threw</Text>
                                    </View>
                                </TouchableOpacity>


                            </View>
                            <View style={Styles.modalFooter}>
                                <TouchableOpacity style={Styles.modalFooterButtons}>
                                    <Text style={Styles.modalContentListStyle}>Button</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.modalFooterButtons}>
                                    <Text style={Styles.modalContentListStyle}>Button</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.modalFooterButtons}>
                                    <Text style={Styles.modalContentListStyle}>Button</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>

        );
    }
}
export default Pending;
