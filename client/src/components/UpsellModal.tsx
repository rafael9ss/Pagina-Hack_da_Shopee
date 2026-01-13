import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  basicPlanLink: string;
}

const premiumBenefits = [
  "Tática Secreta para Vender até 100% a Mais na Black Friday",
  "Tática para Escolher Produtos Campeões e Vender Muito Mais",
  "Lista Especial de Fornecedores Confiáveis",
  "Suporte para Tirar Dúvidas Todos os Dias",
];

export default function UpsellModal({ isOpen, onClose, onConfirm, basicPlanLink }: UpsellModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/*
        O modal foi refeito do zero para otimizar a visualização em
        dispositivos móveis. Em telas pequenas ele ocupa toda a altura e
        largura disponíveis, com rolagem interna caso o conteúdo ultrapasse
        a área visível. Em telas maiores (`sm:` e acima) ele passa a ter
        dimensões fixas e se posiciona centralizado. O texto foi
        condensado para transmitir a ideia de upgrade de forma clara e
        direta, mantendo os preços, os links e o conceito de desconto.
      */}
      <DialogContent className="top-0 left-0 translate-x-0 translate-y-0 w-full h-full p-4 bg-white border-4 border-yellow-500 shadow-2xl overflow-y-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-md sm:max-h-[90vh] sm:rounded-lg">
        <div className="flex flex-col items-center space-y-4 text-gray-800">
          <h2 className="text-xl font-black text-red-600 text-center">Espere! Sua compra não está completa</h2>
          <p className="text-sm text-gray-700 text-center">Você está a um passo de ter resultados definitivos.</p>
          <p className="text-sm text-gray-700 text-center">O plano básico é um bom começo, mas o Premium entrega o caminho completo e os recursos que fazem a diferença.</p>

          <div className="w-full border border-yellow-300 rounded bg-yellow-50 p-3">
            <p className="text-sm font-semibold text-yellow-800 text-center mb-2">No Premium você recebe:</p>
            <ul className="space-y-2">
              {premiumBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-xs">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-600 line-through">de R$ 29,90</p>
            <p className="text-3xl font-black text-green-600">por R$ 24,90</p>
            <p className="text-xs text-gray-600">(só R$ 14,90 a mais)</p>
          </div>

          <Button
            onClick={onConfirm}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-black py-3 rounded shadow-md"
          >
            SIM! Quero o Hack completo
          </Button>

          <a
            href={basicPlanLink}
            onClick={onClose}
            className="block text-center text-xs text-gray-500 underline"
          >
            Continuar com o básico por R$ 10,00
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
