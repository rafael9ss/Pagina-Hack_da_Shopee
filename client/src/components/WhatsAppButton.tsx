import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/message/SETD4GEBJRX6A1';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 animate-bounce"
      aria-label="Abrir WhatsApp"
      title="Tire suas dúvidas no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
