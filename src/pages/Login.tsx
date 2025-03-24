import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { logInOutline, personCircleOutline, calculatorOutline } from 'ionicons/icons';
import FCC from '../assets/fcc.svg';

const Login: React.FC = () => {
    const doLogin = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div className='ion-text-center ion-padding'>
                    <img src={FCC} alt="FCC logo" width={'50%'} />
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='simon@gmail.com'></IonInput>
                            <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password' placeholder='Enter your password'></IonInput>
                            
                            <IonButton className='ion-margin-top' type='submit' expand='block'> 
                                <IonIcon icon={logInOutline} slot='end'></IonIcon>
                                Login
                            </IonButton> 
                            
                            <IonButton routerLink="/register" color={'secondary'} className='ion-margin-top' expand='block'> 
                                <IonIcon icon={personCircleOutline} slot='end'></IonIcon> 
                                Create Account
                            </IonButton> 

                            <IonButton routerLink="/calculator" color={'tertiary'} className='ion-margin-top' expand='block'> 
                                <IonIcon icon={calculatorOutline} slot='end'></IonIcon> 
                                Tính tuổi
                            </IonButton> 
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
