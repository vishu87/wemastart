<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
	<title>Wema Bank</title>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/owl.carousel.css">
	<link rel="stylesheet" type="text/css" href="css/owl.theme.css">
	<!-- <link rel="stylesheet" type="text/css" href="css/hover.css"> -->

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/evil-icons/1.9.0/evil-icons.min.css">

	<link href="https://fonts.googleapis.com/css?family=Muli:400,600,700|Roboto:400,500" rel="stylesheet">

	
	<link rel="stylesheet" type="text/css" href="main.css">

	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/owl.carousel.min.js"></script>
	<script src="https://cdn.jsdelivr.net/evil-icons/1.9.0/evil-icons.min.js"></script>
	<script type="text/javascript" src="js/custom.js"></script>
	
	<link rel="icon" type="image/png" href="favicon.ico">
</head>
<body>
<header>
	<div class="container-fluid upper-header">
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<div class="logo">
						<a href="#">
							<img src="img/logo.png">
						</a>
					</div>
				</div>
				<div class="col-md-5">
					<!-- <div class="top-menu">
						<ul>
							<li>
								<a href="javascript:;" class="active">Investor Relations</a>
							</li>
							<li>
								<a href="javascript:;">Media Room</a>
							</li>
							<li>
								<a href="javascript:;">Careers</a>
							</li>
							<li>
								<a href="javascript:;">Tools &amp; Downloads</a>
							</li>
						</ul>
					</div> -->
					<div class="header-search">
						<input name="search" type="text" placeholder="What are you looking for?">
						<div data-icon="ei-search"></div>
					</div>
					<div class="header-subscribe">
						<input type="text" name="subscribe" placeholder="Email Address">
						<a href="javascript:;">
							<img src="img/subscribe.png">
						</a>
					</div>
				</div>
				<div class="col-md-4">
					<div class="header-btns">
						<a href="javascript:;">Login</a>
						<a href="javascript:;">Open an Account</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container lower-header">
		<ul class="header-menu">
			<li>
				<a href="javascript:;">
				<img src="img/person.png">
				Individual</a>
				<?php include('sub_menu.php'); ?>
			</li>
			<li>
				<a href="javascript:;">
				<img src="img/industry2.png">
				Corporate</a>
				<?php //include('sub_menu.php'); ?>
			</li>
			<li>
				<a href="javascript:;">
				<img src="img/sme.png">
				SME</a>
				<?php //include('sub_menu.php'); ?>
			</li>
			<li>
				<a href="javascript:;">
				<img src="img/comp.png" style="width:25px; height:auto">
				E-Banking</a>
				<?php //include('sub_menu.php'); ?>
			</li>
			<li>
				<a href="javascript:;">
				<img src="img/bank.png">
				About Us</a>
				<?php //include('sub_menu.php'); ?>
			</li>
			<li>
				<a href="javascript:;">
				<img src="img/more.png">
				More</a>
				<?php //include('sub_menu.php'); ?>
			</li>
		</ul>
	</div>
	<div class="mobile-header">
		<div>
			<div>
				<div id="menu-mobile" class="logo">
					<a href="#" class="menu-icon"></a>
					<a href="#"><img src="img/logo_mobile.png" class="logo" /></a>
				</div>
			</div>
			<div>
				<div class="right-icons" ><span><img src="img/search2.png"></span> | &nbsp; Login</div>
			</div>
		</div>
	</div>
</header>
<div class="mobile-main">
	<div class="open-account">
		<a href="#">Open Account</a>
	</div>
	<div class="mobile-menu">
		<ul>
			<li>
				<a href="#">
					<img src="img/person_white.png"> Individual
				</a>
				<ul class="sub">
					<li><a href="#">Accounts</a></li>
					<li><a href="#">Cards</a></li>
					<li><a href="#">Electronic Banking</a></li>
					<li><a href="#">Collection Services</a></li>
					<li><a href="#">Loans</a></li>
					<li><a href="#">Investments</a></li>
					<li><a href="#">Insurance</a></li>
				</ul>
			</li>
			<li>
				<a href="#">
					<img src="img/corporate-icon-white.png">
					Corporate
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/sme_white.png"> 
					SME
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/comp_white.png"> 
					E-Banking
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/bank_white.png"> 
					About Us
				</a>
			</li>
			<li>
				<a href="#">
					<img src="img/more_white.png"> 
					More
				</a>
			</li>
		</ul>
	</div>
</div>

<!-- Fixed menu -->
	<div class="container-fluid fixed-header">
		<div class="container">
			<div class="row">
				<div class="col-md-2">
					<div class="fixed-logo">
						<a href="#">
							<img src="img/logo-white.png">
						</a>
					</div>
				</div>
				<div class="col-md-7">
					<ul class="fixed-menu">
						<li>
							<a href="javascript">	Individual
							</a>
						</li>
						<li>
							<a href="javascript">Corporate</a>
						</li>
						<li>
							<a href="javascript">SME</a>
						</li>
						<li>
							<a href="javascript">E-Banking</a>
						</li>
						<li>
							<a href="javascript">About Us</a>
						</li>
						<li>
							<a href="javascript">More</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3">
					<div class="search">
						<img src="img/header-search.png">
						<a href="javascript:;">Open an Account</a>
					</div>
				</div>	
			</div>
		</div>
	</div>
<!-- End -->
<main>
	<div class="overlay"></div>
