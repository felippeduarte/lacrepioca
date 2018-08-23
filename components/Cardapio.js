import React, { Component } from 'react';
import truck from '../assets/img/truck.png';

export default class Cardapio extends Component {

    render() {
        return (
            <div className="container-fluid cardapio">
                <div className="col p-3 text-center titulo-cardapio">
                    <h2>Nossos sabores</h2>
                    <p>Todas as opções feitas com crepe, tapioca ou crepioca.</p>
                </div>
                <div className="row cardapio-items">
                    <div className="col-xs-12 col-sm-8">
                        <div className="row text-center">
                            <div className="col">
                                <h3>Salgados</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Filé Mignon Agridoce</span><br/><span className="produto-descricao">Iscas de Filé Mignon, Mussarela, Gorgonzola, Cream Cheese, Cebola Caramelizada e Cebola</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Filé Funghi</span><br/><span className="produto-descricao">Filé Mignon, Mussarela, Gorgonzola, Cream Chesse, Cogumelos e Cebola</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Filé Mignon Cheddar e Bacon</span><br/><span className="produto-descricao">Iscas de Filé Mignon, Mussarela, Cheddar, Bacon, Cebola, Tomate e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Filé Mignon Quatro Queijos</span><br/><span className="produto-descricao">Filé Mignon, Mussarela, Gorgonzola, Cream Chesse, Cheddar, Cebola, Tomate e Oregano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Filé Mignon Alho Poró</span><br/><span className="produto-descricao">Iscas de Filé Mignon, Mussarela, Alho Poró, Cream Cheese, Cebola e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Filé Mignon Gorgonzola</span><br/><span className="produto-descricao">Iscas de Filé Mignon, Mussarela, Gorgonzola, Cebola</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Filé Mignon Bacon</span><br/><span className="produto-descricao">Iscas de Filé Mignon, Mussarela, Bacon, Cebola, Tomate e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Filé Mignon Cheddar</span><br/><span className="produto-descricao">Iscas de Filé Mignon, Mussarela, Cheddar, Cebola, Tomate e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Filé Mignon</span><br/><span className="produto-descricao">Iscas de Filé Mignon, Mussarela, Cebola, Tomate e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Entrevero</span><br/><span className="produto-descricao">Iscas de filé mignon, calabresa, bacon, carne seca, frango, mussarela, pinhão, tomate, cebola e orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Frango Quatro Queijos</span><br/><span className="produto-descricao">Frango desfiado, Mussarela, Cream Cheese, Gorgonzola, Cheddar, Cebola, Tomate e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Frango Cheddar e Bacon</span><br/><span className="produto-descricao">Frango desfiado, Mussarela, Cheddar, Bacon, Cebola, Tomate e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Frango Cream Cheese</span><br/><span className="produto-descricao">Frango desfiado, Mussarela, Cream Cheese, Cebola, Tomate e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Frango Palmito</span><br/><span className="produto-descricao">Frango desfiado, Mussarela, Palmito, Cebola, Tomate e Orégano</span></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Carne Seca</span><br/><span className="produto-descricao">Carne Seca desfiada, Mussarela, Cream Cheese, Cebola e Orégano.</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Calabresa com Alho Poró</span><br/><span className="produto-descricao">Calabresa, Mussarela, cream cheese, alho poró, Cebola e Orégano.</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Calabresa Com Cheddar</span><br/><span className="produto-descricao">Calabresa, Mussarela, Cheddar, Cebola, Tomate e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Quatro Queijos</span><br/><span className="produto-descricao">Queijo Mussarela, Queijo Gorgonzola, Cream Cheese e Cheddar</span></li>
                                    <li><span className="fa-li"><i className="fa fa-leaf"></i></span><span className="produto-resumo">Funghi</span><br/><span className="produto-descricao">Cogumelos, Mussarela, Cream Cheese, Gorgonzola e Cebola</span></li>
                                    <li><span className="fa-li"><i className="fa fa-leaf"></i></span><span className="produto-resumo">Vegetariano</span><br/><span className="produto-descricao">Queijo Mussarela, Palmito, Azeitona, Ovo, Cebola, Tomate e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Portuguesa</span><br/><span className="produto-descricao">Queijo Mussarela, Presunto, Azeitona, Cebola, Ovo, Tomate e Orégano.</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Peito de Peru Cream Cheese</span><br/><span className="produto-descricao">Peito de Peru, Mussarela, Cream Cheese, Azeitona, Tomate, Cebola, Palmito e orégano.</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Bacon</span><br/><span className="produto-descricao">Bacon, Mussarela, Cheddar, Cebola, Tomate e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-leaf"></i></span><span className="produto-resumo">Alho Poró</span><br/><span className="produto-descricao">Queijo Mussarela, Alho poró, Cream Cheese e Cebola</span></li>
                                    <li><span className="fa-li"><i className="fa fa-leaf"></i></span><span className="produto-resumo">Rúcula com Tomate Seco</span><br/><span className="produto-descricao">Mussarela, Rúcula, Tomate Seco, Cream Cheese e Orégano</span></li>
                                    <li><span className="fa-li"><i className="fa fa-leaf"></i></span><span className="produto-resumo">Palmito</span><br/><span className="produto-descricao">Palmito, Mussarela, Cebola, Tomate e Orégano.</span></li>
                                    <li><span className="fa-li"><i className="fa fa-leaf"></i></span><span className="produto-resumo">Marguerita</span><br/><span className="produto-descricao">Mussarela, Manjericão, Cebola, Tomate e Orégano.</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Pizza</span><br/><span className="produto-descricao">Mussarela, Presunto, Cebola, Tomate e Orégano</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="row text-center">
                            <div className="col">
                                <h3>Doces</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Nutella</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Chocolate Preto</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Chocolate Branco</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Chocolate Meio Amargo</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Doce de Leite</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Doce Branco</span><br/><span className="produto-descricao">Chocolate branco, doce de leite, leite ninho, bolacha triturada e morangos</span></li>
                                    <li><span className="fa-li"><i className="fa fa-utensils"></i></span><span className="produto-resumo">Romeu e Julieta</span><br/><span className="produto-descricao">Queijo com Goiabada</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 p-4">
                                <img className="img-fluid" src={truck} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}