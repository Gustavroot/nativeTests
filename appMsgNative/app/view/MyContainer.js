/*
 * File: app/view/MyContainer.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyContainer', {
    extend: 'Ext.Container',

    config: {
        id: 'containerPrueba',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'App prueba'
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    /*
                    function checkConnection() {
                    var networkState = navigator.connection.type;

                    var states = {};
                    states[Connection.UNKNOWN]  = 'Unknown connection';
                    states[Connection.ETHERNET] = 'Ethernet connection';
                    states[Connection.WIFI]     = 'WiFi connection';
                    states[Connection.CELL_2G]  = 'Cell 2G connection';
                    states[Connection.CELL_3G]  = 'Cell 3G connection';
                    states[Connection.CELL_4G]  = 'Cell 4G connection';
                    states[Connection.NONE]     = 'No network connection';

                    alert('Connection type: ' + states[networkState]);
                    }

                    checkConnection();





                    if (Ext.device.Connection.isOnline()) {
                    alert('You are currently connected via ' + Ext.device.Connection.getType());
                    //Ext.Msg.alert('You are currently connected via ' + Ext.device.Connection.getType());
                } else {
                    Ext.Msg.alert('You are not currently connected');
                }
                */


                //alert(navigator.onLine);





                //funcionPrueba=function(){
                //Ext.device.Notification.show({title: 'One Button', message: 'This is a simple notification with one button.'});
                //};


                //setTimeout(funcionPrueba,5000);




                //Ext.device.notification.vibrate();


                //alert("1");

                alert("prueba");

                var me=this;

                Ext.device.Camera.capture({
                    success: function(url) {
                        //show the newly captured image in a full screen Ext.Img component:
                        me.add({
                            xtype:"image",
                            src: url
                        });
                    },
                    source: 'camera',
                    destination: 'file'
                });

                //alert("2");


                /*
                funcionPrueba=function(){
                alert("sirve!");
                };

                //Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);

                if (navigator.notification) {
                    funcionPrueba();
                    //navigator.geolocation.getCurrentPosition(
                    //function(position){
                    //Se crea un objeto de posicion, con latitud y longitud actuales
                    //    posActual = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    //Ext.getCmp("mapaContainerMapa").setMapCenter({latitude: posActual.lat(), longitude: posActual.lng()});
                    //}
                    //);
                }

                Ext.Msg.alert('Title', 'Otro msg.', Ext.emptyFn);

                //navigator.notification.confirm('You are the winner!', funcionPrueba, 'Game Over','Restart,Exit');
                */
                },
                height: '10%',
                left: '40%',
                top: '45%',
                ui: 'confirm-round',
                width: '20%',
                iconCls: 'info',
                iconMask: true
            }
        ]
    }

});