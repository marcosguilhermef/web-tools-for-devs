'use client'
import React, { useState } from "react";
import Articles from '@/app/Compoments/Articles'
import '@/app/conversor.css'
import './meu-ip.css'
import Fetch from "../util/Fetch";
export default function MeuIp({ h1 }: { h1?: string }) {

    const [ ip, setId ] = useState<string>("Aguarde...")

    async function getIp(){
        let response = await new Fetch('https://api.ipify.org',{}, Fetch.GET).doFetchGetResponse();
        if(response.ok){
            let ip = await response.text();
            setId(ip)
        }else{
            setId('IP não identificado.')
        }
    }
    getIp();
    return (
        <div>
            <h1 className="text-title">{h1}</h1>
            <div className="ip-number">
                { ip }
            </div>
            <Articles title={"O que é o protocolo Ip?"}>
                <p>{'Na era digital em que vivemos, onde a conectividade é essencial para quase todos os aspectos da vida cotidiana, o Protocolo de Internet (IP) desempenha um papel fundamental. O IP é a base da comunicação de dados em redes de computadores e é responsável por fornecer identificação exclusiva e endereçamento para dispositivos conectados à Internet. Neste artigo, exploraremos em detalhes o Protocolo IP, sua história, funcionamento e importância na atualidade.'}</p>

                <p>{'O Protocolo de Internet é uma parte fundamental da pilha de protocolos TCP/IP, que é a base para a comunicação na Internet. O IP é a camada de rede dessa pilha e lida com o endereçamento e o roteamento dos pacotes de dados que são enviados e recebidos na rede. Sua principal função é atribuir um endereço único a cada dispositivo conectado à Internet, permitindo que os pacotes de dados sejam enviados e entregues corretamente.'}</p>

                <p>{'Uma das principais características do Protocolo IP é o endereço IP, que consiste em uma série de números separados por pontos. Existem dois padrões principais para endereços IP: o IPv4 (Protocolo de Internet versão 4) e o IPv6 (Protocolo de Internet versão 6). O IPv4 é o sistema de endereçamento original e utiliza um formato de 32 bits, o que limita o número total de endereços IP disponíveis. Com o rápido crescimento da Internet e o aumento do número de dispositivos conectados, a escassez de endereços IPv4 se tornou um desafio. Para superar essa limitação, o IPv6 foi introduzido, utilizando um formato de endereço de 128 bits, o que fornece um número muito maior de endereços IP disponíveis.'}</p>

                <p>{'O funcionamento do Protocolo IP é baseado em pacotes de dados. Quando um dispositivo deseja enviar dados para outro dispositivo na rede, ele divide os dados em pacotes menores. Cada pacote contém o endereço IP de origem e o endereço IP de destino, juntamente com os dados reais a serem transmitidos. Esses pacotes são então enviados pela rede e roteados de um dispositivo para outro até que alcancem seu destino final. O Protocolo IP garante que esses pacotes sejam roteados corretamente, mesmo que passem por várias redes diferentes antes de chegar ao destino.'}</p>

                <p>{'O roteamento é um aspecto crítico do Protocolo IP. Cada dispositivo na rede possui uma tabela de roteamento que indica quais caminhos os pacotes de dados devem seguir para alcançar um determinado destino. Essas tabelas de roteamento são atualizadas e compartilhadas entre os dispositivos de rede, permitindo que eles determinem a melhor rota para entregar os pacotes. Esse processo de roteamento permite que os pacotes de dados sejam enviados por caminhos diferentes, dependendo da disponibilidade e eficiência da rede, garantindo uma entrega eficaz e confiável.'}</p>

                <p>{'Além de seu papel fundamental na comunicação de dados, o Protocolo IP tem uma importância significativa na era da Internet das Coisas (IoT). Com a explosão de dispositivos inteligentes conectados à Internet, desde eletrodomésticos até veículos autônomos, o IPv6 desempenha um papel fundamental no fornecimento de endereços IP exclusivos para todos esses dispositivos. Isso permite a comunicação e a troca de dados entre eles, impulsionando o avanço da automação e da conectividade em todos os setores.'}</p>
                
                <p>{'No entanto, com a crescente importância do Protocolo IP, também surgem desafios relacionados à segurança e privacidade. O endereço IP de um dispositivo pode fornecer informações sobre sua localização geográfica e outras informações sensíveis. Portanto, é crucial adotar medidas de segurança, como firewalls e criptografia, para proteger os dispositivos e os dados transmitidos por meio do Protocolo IP.'}</p>

                <p>{'Em resumo, o Protocolo de Internet (IP) é uma tecnologia fundamental que permite a comunicação e o compartilhamento de dados na Internet. Ele desempenha um papel vital no endereçamento e roteamento de pacotes de dados, garantindo que eles sejam entregues corretamente em toda a rede. Com o surgimento da IoT e o aumento da conectividade, o IPv6 desempenha um papel crucial na atribuição de endereços IP exclusivos para dispositivos em todo o mundo. No entanto, é importante lembrar que a segurança e a privacidade devem ser consideradas ao lidar com o Protocolo IP. À medida que continuamos a avançar na era digital, o Protocolo IP continuará sendo uma base essencial para a conectividade e a comunicação global.'}</p>            
            </Articles>
        </div>

    )
}