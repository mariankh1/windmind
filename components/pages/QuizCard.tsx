import { IonBadge, IonProgressBar } from '@ionic/react';
import Image from 'next/image';
import Card from '../ui/Card';
import Link from 'next/link';

type QuizCardProps = {
  id: number;
  title: string;
  type: string;
  description: string;
  author: string;
  authorAvatar: string;
  image: string;
  questionCount: number;
  progress: number;
};

const QuizCard = ({
  id,
  title,
  type,
  description,
  author,
  authorAvatar,
  image,
  questionCount,
  progress
}: QuizCardProps) => (
  <Link href={`/quiz/${id}`} passHref>
    <Card className="my-4 mx-auto transition-transform hover:scale-[1.01] active:scale-[0.99]">
      {/* Image Header */}
      <div className="h-40 w-full relative">
        <Image
          className="rounded-t-xl object-cover"
          src={image}
          alt={title}
          fill
          priority
        />
        <div className="absolute top-2 right-2">
          <IonBadge color="light">{type}</IonBadge>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
        <h2 className="font-bold text-xl text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 my-2">
          {description}
        </p>
        
        {/* Progress Bar */}
        <div className="my-3">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>Progress</span>
            <span>{Math.round(progress * 100)}%</span>
          </div>
          <IonProgressBar value={progress} color="primary" />
        </div>
        
        {/* Footer */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 relative">
              <Image
                src={authorAvatar}
                className="rounded-full object-cover"
                alt={author}
                fill
              />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {author}
            </span>
          </div>
          <IonBadge color="medium">{questionCount} questions</IonBadge>
        </div>
      </div>
    </Card>
  </Link>
);

export default QuizCard;