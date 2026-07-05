// Você digita apenas isto:
function calcular
// O IntelliCode sugere automaticamente em cinza claro:
function calcularTotalPedido() { ... } // [Aperte TAB]

// Exemplo de requisição para uma API de IA gerar um componente de Cardápio
async function gerarItemCardapioPorIA(promptProduto) {
    const apiKey = "SUA_CHAVE_DE_API_AQUI";
    const url = "https://openai.com"; // Ou endpoint Azure/Microsoft

    const resposta = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4o", // Modelo de código/texto
            messages: [{
                role: "user",
                content: `Gere apenas o código HTML estruturado para o item: ${promptProduto}`
            }],
            temperature: 0.2
        })
    });

    const dados = await resposta.json();
    return dados.choices[0].message.content; 
    // Retorna o bloco de código HTML pronto para injetar no VS Code
}
 
// Coloque o número real do Nicolas com o código do país (55) e o DDD
const numeroWhatsapp = "5511999999999"; 
