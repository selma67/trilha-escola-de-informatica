# Trilha Escola de Informatica

tenho este texto para minha escola de informatica, trilha escola de informatica, foi criado no gemini, o texto está bom, pode ser melhorado, seo principalmente, a ideia é que a escola apareça nos resultados de busca do google, este site ficara no google meu negocio, porem, o lay out esta quinta serie, quero um visual bem elaborado, digno de uma escola de informatica... portanto, faça uma analise para melhorias e prinmcipalmente, o layout...<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trilha Escola de Informática | Aulas Presenciais em Sorocaba</title>
    <meta name="description" content="Aprenda informática do zero em Sorocaba. Aulas presenciais, personalizadas e no seu ritmo para terceira idade, Pacote Office, Canva e mercado de trabalho na Trilha.">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #d9534f;
            --primary-dark: #b52b27;
            --primary-light: #f8d7da;
            --accent: #ff6b6b;
            --bg-page: #faf9f9;
            --card-bg: #ffffff;
            --text-main: #2d3748;
            --text-muted: #718096;
            --white: #ffffff;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--bg-page);
            color: var(--text-main);
            line-height: 1.7;
        }

        /* Hero Section */
        header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: var(--white);
            padding: 100px 20px 120px;
            text-align: center;
            position: relative;
            clip-path: ellipse(150% 100% at 50% 0%);
        }

        header .badge {
            background: rgba(255, 255, 255, 0.2);
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: inline-block;
            margin-bottom: 20px;
        }

        header h1 {
            font-size: 3rem;
            font-weight: 800;
            max-width: 850px;
            margin: 0 auto 20px;
            line-height: 1.2;
        }

        header p {
            font-size: 1.25rem;
            max-width: 650px;
            margin: 0 auto 40px;
            opacity: 0.9;
        }

        .btn-primary {
            background-color: var(--white);
            color: var(--primary);
            padding: 16px 36px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.05rem;
            display: inline-block;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.25);
            background-color: #fff5f5;
        }

        /* Container Principal */
        .container {
            max-width: 1100px;
            margin: -60px auto 0;
            padding: 0 20px 60px;
            position: relative;
            z-index: 10;
        }

        /* Cards e Seções */
        .card-box {
            background: var(--card-bg);
            border-radius: 20px;
            padding: 50px;
            margin-bottom: 40px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(0,0,0,0.03);
        }

        .card-box h2 {
            color: var(--primary);
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 12px;
        }

        .card-box h2::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 60px;
            height: 4px;
            background-color: var(--primary);
            border-radius: 2px;
        }

        .card-box p {
            font-size: 1.1rem;
            color: var(--text-muted);
            margin-bottom: 15px;
        }

        /* Grid de Momentos e Cursos */
        .grid-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .grid-item {
            background: #fff9f9;
            padding: 30px;
            border-radius: 16px;
            border-left: 5px solid var(--primary);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .grid-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(217, 83, 79, 0.1);
        }

        .grid-item h3 {
            color: var(--primary);
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .grid-item p {
            font-size: 0.95rem;
            margin-bottom: 0;
        }

        /* Call to Action Central */
        .cta-box {
            background: linear-gradient(135deg, #fff0f0 0%, #ffe6e6 100%);
            text-align: center;
            border: 2px dashed var(--primary);
            border-radius: 20px;
            padding: 60px 30px;
        }

        .cta-box h2::after { left: 50%; transform: translateX(-50%); }
        .cta-box h2 { text-align: center; }

        /* Rodapé Elegante */
        footer {
            background-color: #1a202c;
            color: var(--white);
            text-align: center;
            padding: 60px 20px;
            margin-top: 60px;
        }

        footer h3 {
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--accent);
        }

        footer p {
            color: #a0aec0;
            margin: 8px 0;
            font-size: 1.05rem;
        }

        footer a {
            color: var(--white);
            text-decoration: underline;
            transition: color 0.2s;
        }

        footer a:hover {
            color: var(--accent);
        }

        .footer-hours {
            margin-top: 20px;
            background: rgba(255,255,255,0.05);
            display: inline-block;
            padding: 15px 30px;
            border-radius: 10px;
            font-size: 0.95rem;
        }

        .copyright {
            margin-top: 40px;
            font-size: 0.85rem;
            opacity: 0.6;
        }

        @media (max-width: 768px) {
            header h1 { font-size: 2.2rem; }
            .card-box { padding: 30px 20px; }
        }
    



    


        Aulas Presenciais em Sorocaba
        

Você não precisa saber para começar.


        

Talvez você esteja começando agora, tenha parado de estudar e esteja voltando, ou precise aprender informática para trabalhar, estudar e ter autonomia.


        Falar pelo WhatsApp
    



    



        


            

Na Trilha, você encontra esse espaço.


            

Um lugar para aprender informática em Sorocaba sem vergonha de perguntar, sem medo de errar e sem precisar acompanhar o ritmo de outra pessoa.


            

Aqui você aprende desde o básico até as ferramentas essenciais para o seu dia a dia profissional e pessoal, com atendimento totalmente humanizado, acolhedor e seguro para todos.


        



        


            

Para diferentes momentos da vida


            


                


                    

Começando do Zero


                    

Nunca teve intimidade com o computador e quer aprender do absoluto zero, sem complicações.


                


                


                    

Voltando a Estudar


                    

Retome os seus estudos com confiança e adapte-se facilmente às novas tecnologias.


                


                


                    

Terceira Idade


                    

Aprenda a mexer no celular, na internet e no computador com muita paciência e tranquilidade.


                


                


                    

Foco no Trabalho


                    

Domine o Pacote Office (Word, Excel, PowerPoint) e ferramentas requisitadas pelo mercado.


                


            


        



        


            

O que você pode aprender na Trilha


            


                


                    

Informática Básica


                    

Conceitos fundamentais para organizar arquivos, navegar na internet e usar o computador com segurança.


                


                


                    

Pacote Office


                    

Word, Excel e PowerPoint essenciais para o trabalho, estudos e tarefas diárias.


                


                


                    

Canva e Criatividade


                    

Criação de apresentações, conteúdos visuais e uso inteligente de ferramentas digitais.


                


                


                    

Celular e Internet para Terceira Idade


                    

Aulas adaptadas para idosos ganharem autonomia e independência digital.


                


                


                    

Aulas Particulares


                    

Atendimento individualizado para focar exatamente no que você precisa aprender.


                


                


                    

Currículo e IA


                    

Uso de Inteligência Artificial e preparação moderna para processos seletivos e mercado de trabalho.


                


            


        



        


            

Dê o primeiro passo


            

Você não precisa chegar sabendo. Na Trilha, você encontra espaço para aprender no seu próprio tempo.


            Quero Conversar com a Trilha
        



    



    


        

Trilha Escola de Informática


        

Aulas presenciais em Sorocaba - SP


        

📍 Rua Assis Machado, 297 — Vila Hortência — Sorocaba/SP


        

📱 WhatsApp: (15) 98104-8499


        
        


            

🕒 Horário de Atendimento:


            

Segunda a Sexta: 08:30 - 18:00 | Sábado: 09:00 - 12:00


        



        


            

© 2026 Trilha Escola de Informática. Todos os direitos reservados.


        


    siga a paleta coral, verde e branco, conforme os anexos, use o logo anexado, faça um site com imagens correspondentes, uso de gradientes, sessões com imagens, um site elaborado, não somente texto

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://trilha-escola-de-informatica.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c213cb31-a178-41f5-bd43-19fe9b66eb1c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
