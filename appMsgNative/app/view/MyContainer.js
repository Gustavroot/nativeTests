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
                    try{
                        FB.getLoginStatus(function(response) {
                            if (response.status=="connected") {
                                var url = '/me?fields=name,email';
                                FB.api(url, function(response) {
                                    //se envia por extraParams la info del usuario de FB

                                    nombreDelUsuarioPerfil=response.name;

                                    /*
                                    Ext.getStore("storeInfoUsuarioLoginFacebook").getProxy().setExtraParam('nombreCompletoFbParam',response.name);
                                    Ext.getStore("storeInfoUsuarioLoginFacebook").getProxy().setExtraParam('idUserFbParam',response.id);
                                    Ext.getStore("storeInfoUsuarioLoginFacebook").getProxy().setExtraParam('emailUsuarioFbParam',response.email);
                                    Ext.getStore("storeInfoUsuarioLoginFacebook").getProxy().setExtraParam('edadUsuarioFbParam',response.birthday);
                                    Ext.getStore("storeInfoUsuarioLoginFacebook").getProxy().setExtraParam('profilePicUsuarioFbParam',response.picture);
                                    Ext.getStore("storeInfoUsuarioLoginFacebook").load();
                                    */


                                    //variables para enviar por extraParams
                                    alert(response.name);
                                    alert(response.id);
                                    alert(response.email);
                                    alert(response.birthday);
                                    alert(response.picture);
                                    //idUsuarioFacebook=response.id;
                                    //nombreCompletoUsuarioFacebook=response.name;
                                    //emailUsuarioFacebook=response.email;
                                    //nacimientoUsuarioFacebook=response.birthday;
                                    //urlProfilePicUsuarioFacebook=response.picture;

                                    //se modifica el boton de Usuario
                                    //Ext.getCmp("botonDespliegueInfoPerfilUsuario").setText(nombreDelUsuarioPerfil);
                                    Ext.getCmp("toolbarDelContainerPerfilDeUsuario").setTitle(nombreDelUsuarioPerfil);
                                });

                                Ext.Msg.alert('Aviso', 'Su sesión ya está iniciada y autorizada.', Ext.emptyFn);
                                //---------------------------------------------------------------------------------------------------------------------------------------------------------------
                                Ext.getCmp("containerLogIn").setMasked({xtype: 'loadmask', message: 'Espere por favor...'});
                                //Ext.getCmp("containerInicio").setMasked({xtype: 'loadmask', message: 'Espere por favor...', docked: 'top'});
                                //Se carga LOAD el store para carousel y DiDiRapidos
                                Ext.getStore("storeCarouselInicio").load();
                                //Con el siguiente codigo se agregan controladores a las imagenes inferiores en Eventos,
                                //asi como las correspondientes url/html de ellas
                                /*
                                contadorParaConfigurarImagenesCatEventos=1;
                                Ext.getStore("storeCategoriasEventos").each(function (record) {
                                Ext.getCmp("imagenCatEventos"+contadorParaConfigurarImagenesCatEventos).addListener('tap',funcionDarTapImagenesEventos);
                                Ext.getCmp("imagenCatEventos"+contadorParaConfigurarImagenesCatEventos).setHtml("<img src='"+record.get("imagen")+"' height='100%' width='100%'>");
                                contadorParaConfigurarImagenesCatEventos=contadorParaConfigurarImagenesCatEventos+1;
                                });
                                */

                                //Funcion para ir cambiando las imagenes en eventos
                                var funcionCambioEstadoCarousel = function() {
                                    var task = Ext.create('Ext.util.DelayedTask', function() {
                                        //console.log('hi');
                                        Ext.getCmp("carouselEventos").next();
                                        if(Ext.getCmp("carouselEventos").getActiveIndex()==Ext.getCmp("carouselEventos").getItems().length-2){Ext.getCmp("carouselEventos").setActiveItem(0);}
                                        funcionCambioEstadoCarousel.call(this);
                                    }, this);
                                    task.delay(5000);
                                };
                                //Esta es la funcion que hace que cambien las imagenes en el carousel Inicio
                                funcionCambioEstadoCarousel();

                                //---------------------------------ESTA VARIABLE posActual HAY QUE UTILIZARLA EN VARIOS LUGARES-------------------------
                                //Funcion para ir cambiando las imagenes en eventos
                                var funcionGuardadoPosActual = function() {
                                    var taskPosActual = Ext.create('Ext.util.DelayedTask', function() {
                                        if (navigator.geolocation) {
                                            navigator.geolocation.getCurrentPosition(
                                            function(position){
                                                //Se crea un objeto de posicion, con latitud y longitud actuales
                                                posActual = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                                                //Ext.getCmp("mapaContainerMapa").setMapCenter({latitude: posActual.lat(), longitude: posActual.lng()});
                                            }
                                            );
                                        }
                                        //        alert(posActual.lat);
                                        //        alert(posActual.lng);
                                        funcionGuardadoPosActual.call(this);
                                    }, this);
                                    taskPosActual.delay(500);
                                };
                                //Esta es la funcion que hace que se refresque la variable que almacena la posicion actual
                                funcionGuardadoPosActual();    



                                //            alert(idUsuarioFacebook);
                                //---------------------------------------------------------------------------------------------------------------------------------------------------------------        

                            } else if (response.status=="not_authorized") {
                                // not_authorized
                                login();
                            } else {
                                // not_logged_in
                                login();
                            }
                        },{ perms: 'email' });
                        }
                        catch(e){
                            Ext.Msg.alert('Aviso', 'No se pudo conectar con Facebook.', Ext.emptyFn);
                        }




                        /*
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
                */


                setTimeout(function(){alert("Hello");},3000);



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