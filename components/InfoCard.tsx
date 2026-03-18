import Image from 'next/image';

interface InfoCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  action?: React.ReactNode;
  className?: string;
}

const InfoCard = ({title, description, icon, imageSrc, action, className = ''}: InfoCardProps) => {
  return (
    <div
      className={`group rounded-xl bg-white p-4 border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-gray-300 ${className}`}
    >
      {imageSrc && (
        <div className="overflow-hidden rounded-lg mb-4">
          <Image
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            width={200}
            height={200}
          />
        </div>
      )}
      <div className="flex items-center space-x-2">
        {icon && <div className="text-2xl transition-transform duration-300 group-hover:scale-110">{icon}</div>}
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      </div>
      {description && <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
};

export default InfoCard;
