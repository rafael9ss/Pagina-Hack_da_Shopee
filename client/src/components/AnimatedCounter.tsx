import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
    value: string;
    className?: string;
}

export default function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        if (!isInView) return;

        const numericMatch = value.match(/[\d.,]+/);
        if (!numericMatch) {
            setDisplayValue(value);
            return;
        }

        const numStr = numericMatch[0].replace(/\./g, '').replace(',', '.');
        const target = parseFloat(numStr);
        if (isNaN(target)) {
            setDisplayValue(value);
            return;
        }

        const prefix = value.slice(0, numericMatch.index);
        const suffix = value.slice((numericMatch.index || 0) + numericMatch[0].length);
        const hasDecimal = numericMatch[0].includes(',');
        const usesDots = numericMatch[0].includes('.');

        const totalDuration = 1800;
        const steps = 60;
        const stepDuration = totalDuration / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);

            let formatted = current.toString();
            if (usesDots) {
                formatted = current.toLocaleString('pt-BR');
            }
            if (hasDecimal) {
                formatted = current.toFixed(0).replace('.', ',');
            }

            setDisplayValue(`${prefix}${formatted}${suffix}`);

            if (currentStep >= steps) {
                clearInterval(interval);
                setDisplayValue(value);
            }
        }, stepDuration);

        return () => clearInterval(interval);
    }, [isInView, value]);

    return (
        <span ref={ref} className={className}>
            {displayValue}
        </span>
    );
}
