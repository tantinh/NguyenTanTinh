import { useState } from "react";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Share } from "@capacitor/share";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonButton,
  IonTitle,
  IonToolbar,
  IonText,
  IonCard,
  IonCardContent,
  IonImg,
} from "@ionic/react";

export default function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  const requestPermissionAndShowNotification = async (timeString: string) => {
    const permission = await LocalNotifications.requestPermissions();
    if (permission.display === "granted") {
      await LocalNotifications.schedule({
        notifications: [
          {
            title: "Thời gian hiện tại",
            body: `Bây giờ là ${timeString}`,
            id: 1,
            schedule: { at: new Date(Date.now() + 1000) },
            smallIcon: "ic_stat_icon_config_sample",
            iconColor: "#488AFF",
          },
        ],
      });
      await Haptics.impact({ style: ImpactStyle.Medium });
    }
  };

  const getTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    setCurrentTime(timeString);
    requestPermissionAndShowNotification(timeString);
  };

  const shareTime = async () => {
    if (currentTime) {
      await Share.share({
        title: "Chia sẻ thời gian",
        text: `Thời gian hiện tại: ${currentTime}`,
        dialogTitle: "Chia sẻ với bạn bè",
      });
    }
  };

  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 90,
      });
      setPhoto(image.webPath || null);
    } catch (error) {
      console.error("Lỗi khi chụp ảnh", error);
    }
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hiển thị thời gian</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent className="ion-text-center">
            <IonButton expand="full" color="primary" onClick={getTime}>
              Lấy thời gian hiện tại
            </IonButton>
            {currentTime && (
              <IonText color="dark">
                <h2 className="ion-padding">{currentTime}</h2>
              </IonText>
            )}
            <IonButton expand="full" color="success" onClick={shareTime}>
              Chia sẻ thời gian
            </IonButton>
            <IonButton expand="full" color="tertiary" onClick={takePhoto}>
              Chụp ảnh
            </IonButton>
            {photo && <IonImg src={photo} alt="Captured" />}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}
