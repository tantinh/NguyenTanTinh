import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { checkmarkDoneCircle } from 'ionicons/icons';
import React from 'react';
import FCC from '../assets/fcc.svg'
const Register: React.FC = () => {
    const doRegister = (event : React.FormEvent) =>{
        event.preventDefault();
            
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle >Create Acount</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div className='ion-text-center ion-padding'>
                    <img src={FCC} alt="FCC logo" width={'50%'}/>
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
                            <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='simon@gmail.com'></IonInput>
                            <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password' placeholder='simon@gmail.com'></IonInput>
                            <IonButton className='ion-margin-top' type='submit' expand='block'> 
                            <IonIcon icon={checkmarkDoneCircle} slot='end'></IonIcon>
                                Create my account 
                            </IonButton> 
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Register;