export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}   

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;

}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Controle de ps4", preco: 239.00, descricaoPreco: "À vista no PIX", imagem: "./assets/Controles Ps4.jpeg", quantidadeEstoque: 10 },
    { id: 2, descricao: "Jogo Resident Evil 4 ", preco: 160.00, descricaoPreco: "À vista no PIX", imagem: "./assets/Jogo Residente Evil 4.jpeg", quantidadeEstoque: 15 },
    { id: 3, descricao: "Nitendo switch", preco: 1749.99, descricaoPreco: "À vista no PIX", imagem: "./assets/Nitendo switch.jpeg" , quantidadeEstoque: 30},
    { id: 4, descricao: "Ps4 Pro", preco: 2599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/Ps4 Pro.jpeg", quantidadeEstoque: 20 },
    { id: 5, descricao: "Ps4 slim", preco: 2199.99, descricaoPreco: "À vista no PIX", imagem: "./assets/Ps4 slim.jpeg", quantidadeEstoque: 8 },
    { id: 6, descricao: "Ps5", preco: 4399.99, descricaoPreco: "À vista no PIX", imagem: "./assets/Ps5.jpeg", quantidadeEstoque: 9 },
    { id: 7, descricao: "Xbox serie S", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/Xbox serie S.jpeg", quantidadeEstoque: 17 },
    { id: 8, descricao: "Watsap", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/WhatsApp Image 2023-04-11 at 2.24.50 PM.jpeg", quantidadeEstoque: 17 }
]