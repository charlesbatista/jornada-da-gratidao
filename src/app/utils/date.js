// 🌎 Fuso padrão do Brasil
export const TZ = 'America/Sao_Paulo';

/**
 * Converte uma string no formato YYYY-MM-DD para um objeto Date
 * usando meia-noite do horário local (evita problemas com UTC).
 */
export function parseYmdLocal(ymd) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(ymd)) {
    throw new Error(`Formato de data inválido: ${ymd}`);
  }
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Formata um objeto Date no formato YYYY-MM-DD
 * (ótimo para salvar no banco ou comparar dias).
 */
export function toYmd(date) {
  if (!(date instanceof Date)) {
    throw new Error('toYmd requer um objeto Date');
  }
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Retorna a data atual no formato YYYY-MM-DD (local)
 */
export function todayYmd() {
  return toYmd(new Date());
}

/**
 * Soma ou subtrai dias de uma data YYYY-MM-DD e retorna no mesmo formato.
 */
export function addDaysYmd(ymd, days) {
  const date = parseYmdLocal(ymd);
  date.setDate(date.getDate() + days);
  return toYmd(date);
}

export function normalizeToYmd(input) {
  if (input instanceof Date) return toYmd(input);
  if (typeof input === 'string') {
    if (/^\d{4}-\d{2}-\d{2}$/.test(input)) return input;       // <input type="date">
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(input)) {                 // dd/mm/aaaa
      const [d, m, y] = input.split('/').map(Number);
      return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    }
  }
  throw new Error(`Data inválida: ${input}`);
}

// Função para validar formato YYYY-MM-DD
export function isValidYmd(dateString) {
  if (!dateString || typeof dateString !== 'string') return false;

  // Regex para validar formato YYYY-MM-DD
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  // Verificar se é uma data válida
  const date = new Date(dateString + 'T00:00:00');
  const [year, month, day] = dateString.split('-').map(Number);

  return date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day;
}

/**
 * Formata uma data (string YYYY-MM-DD ou Date) no formato brasileiro
 */
export function formatPtBR(input) {
  if (!input) return '';

  let date;
  if (typeof input === 'string') {
    // Se for string "YYYY-MM-DD", converter para Date
    date = parseYmdLocal(input);
  } else if (input instanceof Date) {
    date = input;
  } else {
    return '';
  }

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

/**
 * Obtém o dia da semana em português (0=Domingo, 1=Segunda, ..., 6=Sábado)
 * Sabendo o que o dia da semana é string
 */
export function getWeekdayPtBR(input) {
  if (!input) return '';

  let date;
  if (typeof input === 'string') {
    date = parseYmdLocal(input);
  } else if (input instanceof Date) {
    date = input;
  } else {
    return '';
  }

  const weekdays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  return weekdays[date.getDay()];
}