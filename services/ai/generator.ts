const Groq = require('groq-sdk');

const groq = new Groq({apiKey:'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',dangerouslyAllowBrowser: true });
export async function geradorLista(listaJogos: string) {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
        {
            "role": "user",
            "content": "estou desenvolvendo um aplicativo que cria uma lista de recomendações de jogos, baseado na lista de jogos informada pelo usuário.\nquero enviar uma lista de jogos e voce irá responder a lista de jogos recomendados no fomato de array pronta para ser consumida pelo componente FlatList do React Native, os atributos do array sao nome, plataformas (em texto simples), descricao e imagem (imagem válida do jogo, no formato URL), retorne apenas o array\n"
        },
        {
            "role": "assistant",
            "content": "Estou ansioso para ajudar!\n\nPor favor, forneça a lista de jogos que você deseja usar como base para as recomendações. Quanto mais jogos você fornecer, mais precisas serão as recomendações.\n\nAssim que receber a lista, posso gerar uma lista de recomendações de jogos no formato que você especificou:\n\n```json\n[\n  {\n    \"nome\": \"Nome do Jogo\",\n    \"plataformas\": [\"Plataforma 1\", \"Plataforma 2\", ...],\n    \"descricao\": \"Descrição do Jogo\"\n  },\n  {\n    \"nome\": \"Nome do Jogo 2\",\n    \"plataformas\": [\"Plataforma 1\", \"Plataforma 3\", ...],\n    \"descricao\": \"Descrição do Jogo 2\"\n  },\n  ...\n]\n```\n\nEstou preparado para receber a lista de jogos e fornecer as recomendações!"
        },
        {
            "role": "user",
            "content": listaJogos
        },
    ],
    "model": "llama-3.1-70b-versatile",
    "temperature": 1,
    "max_tokens": 1024,

  });

  return chatCompletion.choices[0]?.message?.content;
}
