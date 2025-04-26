import { IonPage, IonContent, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonProgressBar, IonButton, IonSegment, IonSegmentButton, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import { alertCircle, layers, timer, map, book, flame, sparkles } from 'ionicons/icons';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        
        {/* A. Hero Welcome */}
        <IonText color="primary">
          <h1 className="text-2xl font-bold">Welcome back, <span className="text-rose-600">Emma!</span></h1>
          <p className="opacity-80">Your WSET Level 2 exam is in <span className="font-bold">14 days</span></p>
        </IonText>

        {/* Spacer */}
        <div className="h-4" />

        {/* B. Today's Priority Card */}
        <IonCard className="bg-gradient-to-r from-rose-100 to-amber-50">
          <IonCardHeader>
            <div className="flex items-center">
              <IonIcon icon={alertCircle} className="text-rose-600 mr-2" />
              <IonCardTitle className="text-sm font-medium">YOUR WEAKEST AREA</IonCardTitle>
            </div>
          </IonCardHeader>
          <IonCardContent>
            <h3 className="font-bold mb-2">German Prädikatswein</h3>
            <IonProgressBar value={0.3} color="danger" className="h-2" />
            <IonButton expand="block" size="small" className="mt-3">
              Strengthen Now (12min)
            </IonButton>
          </IonCardContent>
        </IonCard>

        {/* Spacer */}
        <div className="h-4" />

        {/* C. 5-Min Study Actions */}
        <IonSegment scrollable value="flashcards" className="mb-4">
          {[
            { icon: layers, label: 'Flashcards', value: 'flashcards' },
            { icon: timer, label: 'Quick Quiz', value: 'quiz' },
            { icon: map, label: 'Region Map', value: 'map' },
            { icon: book, label: 'SAT Practice', value: 'tasting' }
          ].map((tab) => (
            <IonSegmentButton key={tab.value} value={tab.value} className="min-w-max">
              <div className="flex flex-col items-center px-2">
                <IonIcon icon={tab.icon} size="small" />
                <IonLabel className="text-xs mt-1">{tab.label}</IonLabel>
              </div>
            </IonSegmentButton>
          ))}
        </IonSegment>

        {/* D. Progress Snapshot */}
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol>
              <div className="text-center p-2 border-r border-gray-200 dark:border-gray-700">
                <p className="text-xs opacity-70">WSET Level</p>
                <p className="text-lg font-bold">2</p>
              </div>
            </IonCol>
            <IonCol>
              <div className="text-center p-2 border-r border-gray-200 dark:border-gray-700">
                <p className="text-xs opacity-70">Mastery</p>
                <p className="text-lg font-bold">64%</p>
              </div>
            </IonCol>
            <IonCol>
              <div className="text-center p-2">
                <p className="text-xs opacity-70">Day Streak</p>
                <p className="text-lg font-bold flex justify-center items-center">
                  <IonIcon icon={flame} className="text-rose-500 mr-1" /> 5
                </p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Spacer */}
        <div className="h-4" />

        {/* E. Wine Fact Teaser */}
        <IonItem lines="none" button detail={false} className="bg-amber-50 dark:bg-gray-800 rounded-lg">
          <IonIcon slot="start" icon={sparkles} className="text-amber-500" />
          <IonLabel className="ion-text-wrap">
            <p className="text-sm">Barolo must be aged ≥38 months, with 18 in oak</p>
          </IonLabel>
        </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
