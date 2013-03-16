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
                    funcionPrueba=function(){
                        alert("sirve!");
                    };


                    Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);


                    if (navigator.notification) {
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