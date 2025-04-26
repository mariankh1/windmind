import { 
  IonPage, 
  IonContent,
  IonIcon,
  useIonRouter,
  IonRefresher,
  IonRefresherContent
} from '@ionic/react';
import { 
  flame, 
  layers, 
  zap, 
  alertCircle,
  trophy,
  chevronRight,
  wine,
  timer
} from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HomePage = () => {
  const router = useIonRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [swipeIndex, setSwipeIndex] = useState(0);

  // Mock data
  const user = {
    name: "Emma",
    streak: 12,
    progress: 68,
    weakArea: {
      title: "German Prädikatswein",
      mastery: 32,
      icon: "🇩🇪"
    },
    recentAchievement: "Bordeaux Master"
  };

  const dailyChallenge = {
    title: "Sommelier Sprint",
    time: 15,
    questions: 20,
    reward: 50,
    completed: false
  };

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = (e: CustomEvent) => {
    setTimeout(() => e.detail.complete(), 1000);
  };

 

  return (
    <IonPage>
      <IonContent 
        className="ion-padding bg-gradient-to-b from-rose-50 to-white"
        scrollEvents={true}
      >
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent
            pullingIcon="wine"
            refreshingSpinner="circles"
          ></IonRefresherContent>
        </IonRefresher>

        {/* Swipeable Sections */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          onSlideChange={(swiper) => setSwipeIndex(swiper.activeIndex)}
          className="mb-6 h-[420px]"
        >
          {/* Slide 1: Main Dashboard */}
          <SwiperSlide>
            <header className="mb-6">
              <h1 className="text-4xl font-bold text-rose-900 mb-1">
                Welcome back, <span className="text-rose-600">{user.name}</span>!
              </h1>
              <p className="text-lg text-rose-800/80">
                {swipeIndex === 0 ? "Your study dashboard" : "Daily challenge"}
              </p>
            </header>

            {/* Streak Banner */}
            <div className="bg-gradient-to-r from-amber-400 to-rose-500 rounded-2xl p-4 mb-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/90 text-sm font-medium">Current streak</p>
                  <div className="flex items-center">
                    <IonIcon icon={flame} className="text-white text-xl mr-2" />
                    <span className="text-white text-2xl font-bold">{user.streak} days</span>
                  </div>
                </div>
                <div className="bg-white/20 rounded-full px-3 py-1">
                  <span className="text-white text-sm font-bold">🔥 Hot streak!</span>
                </div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white rounded-2xl p-5 shadow-md mb-6 border border-rose-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Your progress</h2>
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-bold">
                  {user.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-rose-500 to-amber-500 h-3 rounded-full" 
                  style={{ width: `${user.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>WSET Level 2</span>
                <span>Next: Mock Exam</span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2: Daily Challenge */}
          <SwiperSlide>
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <IonIcon icon={timer} className="text-2xl mr-2" />
                <h2 className="text-xl font-bold">Daily Challenge</h2>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{dailyChallenge.title}</h3>
              <p className="mb-6">Complete {dailyChallenge.questions} questions in {dailyChallenge.time} minutes</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg text-center">
                  <p className="text-sm">Questions</p>
                  <p className="text-xl font-bold">{dailyChallenge.questions}</p>
                </div>
                <div className="bg-white/20 p-3 rounded-lg text-center">
                  <p className="text-sm">Minutes</p>
                  <p className="text-xl font-bold">{dailyChallenge.time}</p>
                </div>
                <div className="bg-white/20 p-3 rounded-lg text-center">
                  <p className="text-sm">Points</p>
                  <p className="text-xl font-bold">{dailyChallenge.reward}</p>
                </div>
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center ${dailyChallenge.completed ? 'bg-white/30' : 'bg-amber-400 hover:bg-amber-500'} transition-all`}
                disabled={dailyChallenge.completed}
              >
                {dailyChallenge.completed ? 'Completed!' : 'Start Challenge'}
                {!dailyChallenge.completed && <IonIcon icon={chevronRight} className="ml-2" />}
              </button>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Focus Area */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-5 mb-6 border border-purple-100 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-8xl opacity-10">🇩🇪</div>
          <div className="relative z-10">
            <div className="flex items-center mb-3">
              <IonIcon icon={alertCircle} className="text-purple-600 mr-2 text-xl" />
              <h2 className="text-lg font-bold text-gray-900">Focus Area</h2>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{user.weakArea.title}</h3>
            <p className="text-gray-600 mb-4">Mastery: {user.weakArea.mastery}%</p>
            <button 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-between w-full shadow-md hover:shadow-lg transition-all"
              onClick={() => router.push('/focus-area')}
            >
              <span>Boost This Area</span>
              <IonIcon icon={chevronRight} className="text-xl" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Study</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button 
            className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:border-rose-200 transition-all flex flex-col items-center"
            onClick={() => router.push('/flashcards')}
          >
            <div className="bg-rose-100 p-3 rounded-full mb-3 text-rose-600">
              <IonIcon icon={layers} className="text-2xl" />
            </div>
            <span className="font-bold text-gray-900">Flashcards</span>
            <span className="text-sm text-gray-500">5 min</span>
          </button>
          <button 
            className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:border-amber-200 transition-all flex flex-col items-center"
            onClick={() => router.push('/quick-quiz')}
          >
            <div className="bg-amber-100 p-3 rounded-full mb-3 text-amber-600">
              <IonIcon icon={zap} className="text-2xl" />
            </div>
            <span className="font-bold text-gray-900">Pop Quiz</span>
            <span className="text-sm text-gray-500">10 Qs</span>
          </button>
        </div>

        {/* Recent Achievement */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-100 mb-8">
          <div className="flex items-start">
            <div className="bg-amber-100 p-2 rounded-lg mr-4 text-amber-600">
              <IonIcon icon={trophy} className="text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">You earned:</h3>
              <p className="text-amber-800 font-bold text-xl">{user.recentAchievement}</p>
              <p className="text-gray-600 mt-2">Keep going to unlock more!</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;