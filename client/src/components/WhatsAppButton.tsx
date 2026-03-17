import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/message/SETD4GEBJRX6A1';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3.5 shadow-lg transition-all duration-200 hover:scale-105"
      aria-label="Abrir WhatsApp"
      title="Tire suas dúvidas no WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
    </a>
  );
}
