import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  city: string;
  plan: string;
  visible: boolean;
}

const names = [
  "João Silva", "Maria Santos", "Pedro Oliveira", "Ana Costa", "Carlos Souza",
  "Juliana Lima", "Fernando Alves", "Camila Rodrigues", "Lucas Pereira", "Beatriz Martins",
  "Rafael Gomes", "Larissa Fernandes", "Thiago Ribeiro", "Gabriela Carvalho", "Marcelo Dias"
];

const cities = [
  "São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", "Curitiba - PR",
  "Porto Alegre - RS", "Salvador - BA", "Brasília - DF", "Fortaleza - CE",
  "Recife - PE", "Manaus - AM", "Goiânia - GO", "Campinas - SP", "Florianópolis - SC"
];

const plans = ["Plano Completo", "Plano Completo", "Plano Completo", "Plano Básico"];

export default function PurchaseNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      // Only show if there are no active notifications
      setNotifications(prev => {
        if (prev.length > 0) return prev;

        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        const randomPlan = plans[Math.floor(Math.random() * plans.length)];

        const newNotification: Notification = {
          id: nextId,
          name: randomName,
          city: randomCity,
          plan: randomPlan,
          visible: true
        };

        setNextId(prev => prev + 1);

        // Remove notification after 6 seconds
        setTimeout(() => {
          setNotifications(current => 
            current.map(n => n.id === newNotification.id ? { ...n, visible: false } : n)
          );
          
          // Clean up after fade out animation
          setTimeout(() => {
            setNotifications(current => current.filter(n => n.id !== newNotification.id));
          }, 500);
        }, 6000);

        return [newNotification];
      });
    };

    // Show first notification after 15 seconds
    const firstTimeout = setTimeout(showNotification, 15000);

    // Then show notifications every 40-60 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 20000 + 40000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [nextId]);

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-2 max-w-sm">
      {notifications.map(notification => (
        <Card
          key={notification.id}
          className={`p-4 bg-white shadow-2xl border-l-4 border-green-500 transition-all duration-500 ${
            notification.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
        >
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-gray-900 truncate">{notification.name}</p>
              <p className="text-xs text-gray-600">{notification.city}</p>
              <p className="text-xs text-green-600 font-semibold mt-1">
                Acabou de adquirir: {notification.plan}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
