const sgMail = require('@sendgrid/mail');
const { response } = require('express');

const API_KEY =
	'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'


sgMail.setApiKey(API_KEY)

const message = {
	//to: 'juliarsende@hotmail.com',
	to: ['juliarsende@hotmail.com', 'wanessadiascw@gmail.com' , 'norteyan29@gmail.com' , 'ian.ferraz.m@gmail.com' , 'dutracostaotavio@gmail.com' , 'gleroydev@gmail.com'],
	//from: 'newsletterpcfacil@gmail.com' 
	from: {
		name: 'PcFacil',
		email: 'newsletterpcfacil@gmail.com',
	},
	subject: 'NEWSLETTER PCFACIL',
	text: 'teste1',
	html: `
    <!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PC FACIL NEWSLETTER</title>
	<style type="text/css">
		body {
			margin: 0;
			background-color: #cccccc;
		}

		table {
			border-spacing: 0;
		}

		td {
			padding: 0;
		}

		img {
			border: 0;
		}

		.wrapper {
			width: 100%;
			table-layout: fixed;
			background-color: #cccccc;
			padding-bottom: 60px;
		}

		.main {
			background-color: #ffffff;
			margin: 0 auto;
			width: 100%;
			max-width: 600px;
			border-spacing: 0;
			font-family: sans-serif;
			color: #171a1b;
		}

		.two-columns {
			text-align: center;
			font-size: 0;

		}

		.two-columns .column {
			width: 100%;
			max-width: 300px;
			display: inline-block;
			vertical-align: top;
			text-align: justify;
		}

		.three-columns {
			text-align: center;
			font-size: 0;
			padding: 15px 0px 25px;
		}

		.three-columns .column {
			width: 100%;
			max-width: 200px;
			display: inline-block;
			vertical-align: top;
			text-align: center;
		}

		.three-columns .padding {
			padding: 15px;
		}

		.three-columns .contest {
			font-size: 15px;
			line-height: 20px;
			padding: 0px 5px;
		}

		.two-columns .last {
			padding: 15px;
		}

		.two-columns .padding {
			padding: 20px 20px 20px;
		}

		.two-columns .contest {
			font-size: 15px;
			line-height: 20px;
			text-align: justify;
		}

		.button {
			background-color: #ffffff;
			color: #171a1b;
			text-decoration: none;
			padding: 12px 40px;
			border-radius: 5px;
			font-weight: bold;
			text-align: justify;
		}

		.button-dark {
			background-color: #171a1b;
			color: #ffffff;
			text-decoration: none;
			padding: 12px 40px;
			border-radius: 5px;
			font-weight: bold;
			text-align: justify;
		}
	</style>
</head>

<body>
	<script src="teste.js"></script>

	<center class="wrapper">

		<table class="main" width="100%">

			<!-- TOP BORDER -->
			<tr>
				<td height="8" style="background-color: #171a1b;"></td>
			</tr>

			<!-- LOGO SECTION -->
			<tr>
				<td style="padding: 14px 0px 4px;">
					<table width="100%">

						<tr>
							<td class="two-columns">

								<table class="column">
									<tr>
										<td style="padding: 0px 62px 10px;">
											<a href=""><img src="https://i.imgur.com/luvQchV.png" alt="" width="180px"></a>
										</td>
									</tr>
								</table>

								<table class="column">
									<tr>
										<td style="padding: 10px 62px;">

											<a href="#"><img src="https://i.imgur.com/bmDzKvB.png" alt="" width="30"></a>
											<a href="#"><img src="https://i.imgur.com/ZGOTOFC.png" alt="" width="30"></a>
											<a href="#"><img src="https://i.imgur.com/njtaUAG.png" alt="" width="30"></a>
											<a href="#"><img src="https://i.imgur.com/ElByILc.png" alt="" width="30"></a>
											<a href="#"><img src="https://i.imgur.com/mJFeRz4.png" alt="" width="30"></a>

										</td>
									</tr>
								</table>

							</td>
						</tr>


					</table>
				</td>
			</tr>

			<!-- BANNER IMAGE -->
			<tr>
				<td>
					<a href="#"><img src="https://i.imgur.com/F1Yjo3L.jpg" alt="" width="600px" style="max-width: 100%;"></a>
				</td>
			</tr>

			<!-- THREE COLUMN SECTION -->

			<tr>
				<td>
					<table width="100%">
						<tr>
							<td class="three-columns">

								<table class="column">
									<tr>
										<td class="padding">

											<table class="content">
												<tr>
													<td>
														<a href="#"><img src="https://i.imgur.com/47OIb49.png" alt="" width="130px"
																style="max-width: 130px;"></a>
													</td>
												</tr>
												<tr>
													<td>
														<p style="font-weight: bold; font-size: 17px;">Contato</p>
														<p style="font-size: 12px;"> newsletterpcfacil@gmail.com</p>
													</td>
												</tr>
											</table>


										</td>
									</tr>

								</table>

								<table class="column">
									<tr>
										<td class="padding">

											<table class="content">
												<tr>
													<td>
														<a href="#"><img src="https://i.imgur.com/iH3O5Rl.png" alt="" width="130px"
																style="max-width: 130px;"></a>
													</td>
												</tr>
												<tr>
													<td>
														<p style="font-weight: bold; font-size: 17px;">Quem somos?</p>
														<p style="font-size: 12px; text-align: justify;"> A PC Facil nasceu em um projeto de faculdade, do curso
														de Engenharia de Software, e hoje é um dos melhores sites de montagens de
														computadores do Brasil.</p>
													</td>
												</tr>
											</table>


										</td>
									</tr>

								</table>

								<table class="column">
									<tr>
										<td class="padding">

											<table class="content">
												<tr>
													<td>
														<a href="#"><img src="https://i.imgur.com/zbPsKBy.png" alt="" width="130px"
																style="max-width: 130px;"></a>
													</td>
												</tr>
												<tr>
													<td>
														<p style="font-weight: bold; font-size: 17px;">Faça parte</p>
														<p style="font-size: 12px; text-align: justify;"> Nossa comunidade já conta com milhares de acessos,
														de pessoas de todas as idades, que estão interessados em montar seus computadores
														de maneira mais rápida e eficiente. </p>
													</td>
												</tr>
											</table>


										</td>
									</tr>

								</table>



							</td>
						</tr>
					</table>
				</td>
			</tr>

			<!-- TWO COLUMN SECTION -->

			<tr>
				<td style="background-color: #26292b; color: #ffffff;">
					<table width="100%">

						<tr>
							<td class="two-columns last">

								<table class="column">
									<tr>
										<td class="padding">

											<table class="content">
												<tr>
													<td>
														<a href="#"><img src="https://i.imgur.com/BV8d11n.jpg"
																alt="" width="260"
																style="max-width: 260px; padding-bottom: 20px; padding-top: 20px;"></a>
													</td>
												</tr>
											</table>

										</td>
									</tr>
								</table>

								<table class="column">
									<tr>
										<td class="padding">

											<table class="content">
												<tr>
													<td>
														<p style="font-weight: bold; font-size: 18px;">Alienware Aurora
															R15 chega ao Brasil</p>
														<p style="padding-bottom: 16px; font-size: 12px;">Após alguns
															meses de
															expectativa, a Dell finalmente anunciou o lançamento do
															Alienware
															Aurora R15 no Brasil. O modelo já havia sido revelado na BGS
															2022 e passará a ser
															comercializado de forma oficial em solo brasileiro a partir
															desta terça-feira (23),
															pelo valor inicial de R$ 9.999.
														</p>
														<a href="https://www.tecmundo.com.br/produto/264388-alienware-aurora-r15-chega-brasil-intel-core-i9-rtx-4070-ti.htm"
															class="button"
															style="padding-bottom: 10px; font-size: 12px; text-align: center;">Leia
															mais</a>
													</td>
												</tr>
											</table>

										</td>
									</tr>
								</table>

							</td>

						</tr>
						<tr>
							<td class="two-columns last">

								<table class="column">
									<tr>
										<td class="padding">

											<table class="content">
												<tr>
													<td>
														<a href="#"><img src="https://i.imgur.com/jEs06op.jpg" alt=""
																width="260"
																style="max-width: 260px; padding-bottom: 20px; padding-top: 20px;"></a>
													</td>
												</tr>
											</table>

										</td>
									</tr>
								</table>

								<table class="column">
									<tr>
										<td class="padding">

											<table class="content">
												<tr>
													<td>
														<p style="font-weight: bold; font-size: 18px;">Apple: visual do
															iphone 16 Ultra vaza
															antes do lançamento do iphone 15 </p>
														<p style="padding-bottom: 16px; font-size: 12px;">O mundo da
															tecnologia aguarda com bastante
															ansiedade o lançamento do iPhone 15, próximo smartphone da
															Apple. Porém, o anúncio do novo
															aparelho ainda nem foi feito e vazamentos sobre um outro
															modelo da marca californiana já
															apareceram na internet. Estamos falando do suposto iPhone 16
															Ultra.
														</p>
														<a href="https://www.tecmundo.com.br/dispositivos-moveis/264405-apple-visual-iphone-16-ultra-vaza-imagens.htm"
															class="button"
															style="padding-bottom: 12px; font-size: 12px; text-align: center;">Leia
															mais</a>
													</td>
												</tr>
											</table>

										</td>
									</tr>
								</table>

							</td>

						</tr>

					</table>
				</td>
			</tr>

			<!-- TITLE, TEXT & BUTTON -->

			<tr>
				<td style="padding: 15px 0px 50px;">
					<table width="100%">
						<tr>
							<td style="text-align: center; padding: 15px;">
								<p style="font-size: 20px; font-weight: bold;">Obrigada por inscrever-se na nossa
									News-Letter!
								</p>
								<p style=" line-height: 23px; font-size: 15px; text-align: justify; padding: 5px;">Nosso
									site vai muito
									além de te auxiliar a construção seu computador. Nós queremos te atualizar sobre as
									novidades do
									mercado. Quais as melhores peças para se comprar? O que tem acontecido no mercado
									tecnológico?
									E, obviamente, novidades sobre o nosso website.
								</p>
								<a href="" class="button-dark">Conheça nosso site</a>
							</td>
						</tr>
					</table>
				</td>
			</tr>

			<!-- FOOTER SECTION -->
			<tr>
				<td style="background-color: #26292b;">
					<table width="100%">
						<tr>
							<td style="text-align: center; padding: 45px 20px; color: #ffffff;">
								<a href="#"><img src="https://i.imgur.com/5uRPySN.png" alt="" width="180"></a>
								<p style="padding: 10px;">Fale conosco</p>
								<p style="padding: 10px;">Puc Minas - Prédio 4 Edifício Fernanda.</p>
								<a href="#"><img src="https://i.imgur.com/K1nweuC.png" alt="" width="30"></a>
								<a href="#"><img src="https://i.imgur.com/sLZhR96.png" alt="" width="30"></a>
								<a href="#"><img src="https://i.imgur.com/tDOPIp7.png" alt="" width="30"></a>
								<a href="#"><img src="https://i.imgur.com/AagVaxl.png" alt="" width="30"></a>
								<a href="#"><img src="https://i.imgur.com/NF7Z4Bu.png" alt="" width="30"></a>
								<p style="padding: 10px;">SUBSCRIBE</p>
							</td>
						</tr>
					</table>
				</td>
			</tr>

		</table>
	</center>
</body>

</html>
    `
};


sgMail.send(message) //aqui é onde tudo funciona,basicamente
	.then(response => console.log('Email sent...'))
	.catch(error => console.log(error.message));