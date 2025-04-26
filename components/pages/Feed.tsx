import Image from 'next/image';
import Card from '../ui/Card';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { selectHomeItems } from '../../store/selectors';
import Store from '../../store';

type FeedCardProps = {
  title: string;
  type: string;
  text: string;
  author: string;
  authorAvatar: string;
  image: string;
};

const FeedCard = ({
  title,
  type,
  text,
  author,
  authorAvatar,
  image,
}: FeedCardProps) => (
  <Card className="my-4 mx-auto">
    <div className="h-32 w-full relative">
      <Image
        className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full"
        src={image}
        alt={title}
        fill
      />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">
        {type}
      </h4>
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">
        {text}
      </p>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 relative">
          <Image
            src={authorAvatar}
            className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full"
            alt={author}
            fill
          />
        </div>
        <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">
          {author}
        </h3>
      </div>
    </div>
  </Card>
);

const Feed = () => {
  const wineEducationItems = [
    {
      title: "Understanding Terroir",
      type: "Wine Fundamentals",
      text: "Terroir refers to the complete natural environment where grapes are grown, including factors like soil, topography, and climate. It's a key concept in understanding why wines from different regions taste distinct.",
      author: "WSET Educator",
      authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2-zLnLZUyH4u2R-LHif06KhKAeI2QEbIbA&s"},
    {
      title: "Bordeaux Left vs Right Bank",
      type: "French Wine Regions",
      text: "The Left Bank of Bordeaux is known for Cabernet Sauvignon-dominant blends with structured tannins, while the Right Bank focuses on Merlot with softer tannins. Learn the key appellations and their characteristics.",
      author: "Bordeaux Expert",
      authorAvatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&auto=format&fit=crop",
      image: "https://images.ctfassets.net/9dpm55oop5oi/1U3KH6J72HIMQlfHK7MeWZ/ae2f394a5ccd7255337b316803d4afc6/bordeaux-wine-region-map-overview.png" },
    {
      title: "The Winemaking Process",
      type: "Production Methods",
      text: "From harvest to bottling, understand the steps of winemaking including crushing, fermentation, aging, and clarification. Learn how each step affects the final wine's character.",
      author: "Winemaker",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "German Prädikatswein System",
      type: "Wine Classification",
      text: "Germany's quality classification system based on grape ripeness at harvest. From Kabinett to Trockenbeerenauslese, learn how to identify sweetness levels and quality tiers.",
      author: "German Wine Specialist",
      authorAvatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Wine Faults Identification",
      type: "Tasting Skills",
      text: "Learn to recognize common wine faults like cork taint (TCA), oxidation, volatile acidity, and Brettanomyces. Essential knowledge for WSET tasting exams.",
      author: "WSET Diploma",
      authorAvatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1595986630530-969786b19b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Italian Wine Regions Map",
      type: "Geography",
      text: "Master Italy's 20 wine regions from Piedmont to Sicily. Learn the key DOCGs of each region and their signature grapes like Nebbiolo, Sangiovese, and Aglianico.",
      author: "Italian Wine Scholar",
      authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Wine Service Temperatures",
      type: "Service Knowledge",
      text: "The proper serving temperature dramatically affects wine's taste. Learn ideal ranges: Champagne (6-8°C), white wines (8-12°C), reds (14-18°C), and dessert wines (6-8°C).",
      author: "Sommelier",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    }
  ];

  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wine Study Feed</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wine Study Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications
          open={showNotifications}
          onDidDismiss={() => setShowNotifications(false)}
        />
        {wineEducationItems.map((i, index) => (
          <FeedCard {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;