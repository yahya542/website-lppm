<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<title>LPPM UIM - Home</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="{{ asset('images/icons/favicon.png') }}"/>
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="{{ asset('fonts/fontawesome-5.0.8/css/fontawesome-all.min.css') }}">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="{{ asset('fonts/iconic/css/material-design-iconic-font.min.css') }}">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="{{ asset('vendor/animate/animate.css') }}">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="{{ asset('vendor/css-hamburgers/hamburgers.min.css') }}">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="{{ asset('vendor/animsition/css/animsition.min.css') }}">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="{{ asset('css/util.css') }}">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="{{ asset('css/main.css') }}">
	<!--===============================================================================================-->

	<!-- Scripts -->
	@viteReactRefresh
	@vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body class="animsition">
	
	<!-- Header -->
	<header>
		<!-- Header desktop -->
		 <div   class="container-menu-desktop " > 
			 <div class="topbar" style="background-color: #018210; height: 30px;">
				<div class="content-topbar container h-100">
					
					<!-- <div class="left-topbar">
						<span class="left-topbar-item flex-wr-s-c">
							<span>
								LPPM UIM
							</span>

							<img class="m-b-1 m-rl-8" src="{{ asset('images/icons/icon-night.png') }}" alt="IMG">

							<span>
								Makassar, Indonesia
							</span>
						</span>

						<a href="#" class="left-topbar-item">
							Tentang
						</a>

						<a href="#" class="left-topbar-item">
							Kontak
						</a>
					</div> -->

					<!-- <div class="right-topbar">
						<a href="#">
							<span class="fab fa-facebook-f"></span>
						</a>

						<a href="#">
							<span class="fab fa-twitter"></span>
						</a>

						<a href="#">
							<span class="fab fa-instagram"></span>
						</a>

						<a href="#">
							<span class="fab fa-youtube"></span>
						</a>
					</div> -->
					<hr style="background-color: black; height: 3px;">
				</div>
					
			</div>
			

		
			<!--  -->
			<!-- <div class="wrap-logo container">
				
				<div class="logo">
					<a href="/"><img src="{{ asset('images/icons/logo-01.png') }}" alt="LOGO"></a>
				</div>	

			
				<div class="banner-header">
					<a href="/"><img src="{{ asset('images/banner-01.jpg') }}" alt="IMG"></a>
				</div>
			</div>	
 -->
			<!--  -->
			<!-- <div class="wrap-main-nav"  style="background-color: green;"> -->
				<div class="main-nav" style="background-color: #018210; color: white; height: 50px; border-top : 2px solid #2222 ; width : 100%">
					<!-- Menu desktop -->
					<nav style="height: 50px; background-color: #018210; width: 100%;"   class="menu-desktop-full" >
						
						<style>
							.main-menu li:hover {
								background-color: orange;
							}
							.main-menu li {
								display: flex;
								align-items: center;
								padding: 0 ;
							}
							.main-menu a {
								text-decoration: none;
								color: inherit;
								display: block;
								height: 100%;
								display: flex;
								align-items: center;
								padding: 0 15px;
							}
						</style>
						<ul style="justify-content: start; display: flex; gap:0"   class="main-menu"  >
							<li style="height: 50px ">
								<img src="{{ asset('images/icons/uim.png') }}" alt="LOGO" style="width: 40px; height: 40px; justify-content: center; align-items: center; margin-top: 2px; ">
							</li>

							<li class="main-menu-active" style="background-color: orange; height: 50px ; width:fit-content ; margin-left: 30px" >
								<a href="/">HOME</a>
							</li>

							<li style="height: 50px ">
								<a href="/news">PROFILE</a>
							</li>

							<li style="height: 50px ; ">
								<a href="/announcements">Pengumuman</a>
							</li>

							<li style="height: 50px ; width:fit-content">
								<a href="/research">Riset</a>
							</li>
						</ul>
					</nav>
				</div>	
			</div>
		</div>

		<!-- Header Mobile -->
		<div class="wrap-header-mobile" style="background-color: green;">
			<!-- Logo moblie -->		
			<!-- <div class="logo-mobile">
				<a href="/"><img src="{{ asset('images/icons/logo-01.png') }}" alt="IMG-LOGO"></a>
			</div> -->

			<!-- Button show menu -->
			<div class="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</div>
		</div>

		<!-- Menu Mobile -->
		<div class="menu-mobile">
			<ul class="topbar-mobile">
				<li class="left-topbar">
					<span class="left-topbar-item flex-wr-s-c">
						<span>
							LPPM UIM
						</span>
					</span>
				</li>

				<li class="right-topbar">
					<a href="#">
						<span class="fab fa-facebook-f"></span>
					</a>

					<a href="#">
						<span class="fab fa-twitter"></span>
					</a>

					<a href="#">
						<span class="fab fa-instagram"></span>
					</a>

					<a href="#">
						<span class="fab fa-youtube"></span>
					</a>
				</li>
			</ul>

			<ul class="main-menu-m">
				<li>
					<a href="/">Home</a>
				</li>

				<li>
					<a href="/news">Berita</a>
				</li>

				<li>
					<a href="/announcements">Pengumuman</a>
				</li>

				<li>
					<a href="/research">Riset</a>
				</li>
			</ul>
		</div>
	</header>

	<!-- Load React App -->
	<!-- <div id="app"></div> -->
	
	<!-- Temporary content to test main section display -->
	<div class="main-content" style="padding: 20px; background-color: #f5f5f5; min-height: 800px;">
		<div class="container">
			<div class="horizontal-scroll-container" style="overflow-x: hidden; white-space: nowrap; padding: 10px 0; width: 100%; position: relative;">
				<div class="horizontal-grid" id="autoScrollGrid" style="display: flex; width: 200%;">
					<div class="grid-item" style="width: 370px; height: 318px; background-color: white; margin: 0 15px; border-radius: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; font-size: 18px; color: #666;">
						<img src="{{ asset('images/template/post-32.jpg') }}" alt="1" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
					</div>
					<div class="grid-item" style="width: 370px; height: 318px; background-color: white; margin: 0 15px; border-radius: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; font-size: 18px; color: #666;">
												<img src="{{ asset('images/template/post-20.jpg') }}" alt="1" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
					</div>
					<div class="grid-item" style="width: 370px; height: 318px; background-color: white; margin: 0 15px; border-radius: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; font-size: 18px; color: #666;">
												<img src="{{ asset('images/template/post-16.jpg') }}" alt="1" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
					</div>
					<!-- Duplikat untuk efek looping -->
					<div class="grid-item" style="width: 370px; height: 318px; background-color: white; margin: 0 15px; border-radius: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; font-size: 18px; color: #666;">
												<img src="{{ asset('images/template/post-29.jpg') }}" alt="1" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
					</div>
					<div class="grid-item" style="width: 370px; height: 318px; background-color: white; margin: 0 15px; border-radius: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; font-size: 18px; color: #666;">
												<img src="{{ asset('images/template/post-10.jpg') }}" alt="1" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
					</div>
					<div class="grid-item" style="width: 370px; height: 318px; background-color: white; margin: 0 15px; border-radius: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; font-size: 18px; color: #666;">
												<img src="{{ asset('images/template/post-05.jpg') }}" alt="1" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
					</div>
				</div>
			</div>
			<style>
				#autoScrollGrid {
					animation: scrollAnimation 20s linear infinite;
				}
				@keyframes scrollAnimation {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
			</style>
			<div class="row">
				<div class="col-md-8">
					<div style="background-color: white; padding: 20px; margin-bottom: 20px; border-radius: 5px;">
						<h2>Berita Terbaru</h2>
						<div style="display: flex; align-items: center; margin-bottom: 15px;">
							<img src="{{ asset('images/icons/logo-01.png') }}" alt="Berita 1" style="width: 120px; height: 80px; object-fit: cover; margin-right: 15px;">
							<div>
								<h4>Judul Berita Terbaru 1</h4>
								<p style="color: #666; font-size: 14px;">Tanggal: 29 Desember 2025</p>
								<p>Ini adalah contoh berita terbaru dari LPPM UIM untuk menampilkan tampilan utama halaman...</p>
							</div>
						</div>
						<div style="display: flex; align-items: center; margin-bottom: 15px;">
							<img src="{{ asset('images/icons/logo-01.png') }}" alt="Berita 2" style="width: 120px; height: 80px; object-fit: cover; margin-right: 15px;">
							<div>
								<h4>Judul Berita Terbaru 2</h4>
								<p style="color: #666; font-size: 14px;">Tanggal: 28 Desember 2025</p>
								<p>Contoh berita kedua yang menampilkan informasi penting terkait penelitian dan pengabdian masyarakat...</p>
							</div>
						</div>
						<div style="display: flex; align-items: center;">
							<img src="{{ asset('images/icons/logo-01.png') }}" alt="Berita 3" style="width: 120px; height: 80px; object-fit: cover; margin-right: 15px;">
							<div>
								<h4>Judul Berita Terbaru 3</h4>
								<p style="color: #666; font-size: 14px;">Tanggal: 27 Desember 2025</p>
								<p>Contoh berita ketiga yang menampilkan capaian terbaru dari Lembaga Penelitian dan Pengabdian Masyarakat...</p>
							</div>
						</div>
					</div>
					
					<div style="background-color: white; padding: 20px; margin-bottom: 20px; border-radius: 5px;">
						<h2>Pengumuman</h2>
						<div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin-bottom: 10px;">
							<h4>Pengumuman Penting 1</h4>
							<p>Ini adalah contoh pengumuman penting dari LPPM UIM untuk menampilkan tampilan utama halaman...</p>
							<small style="color: #666;">Tanggal: 29 Desember 2025</small>
						</div>
						<div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #28a745; margin-bottom: 10px;">
							<h4>Pengumuman Penting 2</h4>
							<p>Contoh pengumuman kedua yang memberitahukan tentang jadwal pelatihan dan workshop terbaru...</p>
							<small style="color: #666;">Tanggal: 28 Desember 2025</small>
						</div>
						<div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ffc107;">
							<h4>Pengumuman Penting 3</h4>
							<p>Contoh pengumuman ketiga tentang penutupan sementara layanan administrasi...</p>
							<small style="color: #666;">Tanggal: 27 Desember 2025</small>
						</div>
					</div>
					
					<div style="background-color: white; padding: 20px; border-radius: 5px;">
						<h2>Publikasi Terbaru</h2>
						<div style="border-bottom: 1px solid #eee; padding: 10px 0;">
							<h5>Penelitian Inovatif di Bidang Teknologi</h5>
							<p style="color: #666;">Oleh: Dr. Ahmad Sudrajat, M.T. | Jurnal Ilmiah Nasional | 26 Desember 2025</p>
						</div>
						<div style="border-bottom: 1px solid #eee; padding: 10px 0;">
							<h5>Pengabdian Masyarakat Berbasis Teknologi</h5>
							<p style="color: #666;">Oleh: Dr. Siti Rahmawati, M.Si. | Laporan Lapangan | 25 Desember 2025</p>
						</div>
						<div style="border-bottom: 1px solid #eee; padding: 10px 0;">
							<h5>Implementasi AI dalam Pendidikan</h5>
							<p style="color: #666;">Oleh: Dr. Budi Santoso, Ph.D. | Konferensi Internasional | 24 Desember 2025</p>
						</div>
						<div style="padding: 10px 0;">
							<h5>Analisis Kebijakan Pendidikan Terkini</h5>
							<p style="color: #666;">Oleh: Dr. Rina Kartika, M.Pd. | Jurnal Kebijakan Pendidikan | 23 Desember 2025</p>
						</div>
					</div>
				</div>
				
				<div class="col-md-4">
					<div style="background-color: white; padding: 20px; margin-bottom: 20px; border-radius: 5px;">
						<h3>Statistik</h3>
						<div style="text-align: center; padding: 20px; border-bottom: 1px solid #eee;">
							<img src="{{ asset('images/icons/logo-01.png') }}" alt="Statistik" style="width: 80px; height: 80px; margin-bottom: 10px;">
							<h4 style="color: #007bff;">150+</h4>
							<p style="margin: 0;">Penelitian</p>
						</div>
						<div style="text-align: center; padding: 20px; border-bottom: 1px solid #eee;">
							<img src="{{ asset('images/icons/logo-01.png') }}" alt="Statistik" style="width: 80px; height: 80px; margin-bottom: 10px;">
							<h4 style="color: #28a745;">89+</h4>
							<p style="margin: 0;">Pengabdian Masyarakat</p>
						</div>
						<div style="text-align: center; padding: 20px; border-bottom: 1px solid #eee;">
							<img src="{{ asset('images/icons/logo-01.png') }}" alt="Statistik" style="width: 80px; height: 80px; margin-bottom: 10px;">
							<h4 style="color: #ffc107;">24+</h4>
							<p style="margin: 0;">Publikasi Internasional</p>
						</div>
						<div style="text-align: center; padding: 20px;">
							<img src="{{ asset('images/icons/logo-01.png') }}" alt="Statistik" style="width: 80px; height: 80px; margin-bottom: 10px;">
							<h4 style="color: #dc3545;">12+</h4>
							<p style="margin: 0;">Kolaborasi Luar Negeri</p>
						</div>
					</div>
					
					<div style="background-color: white; padding: 20px; margin-bottom: 20px; border-radius: 5px;">
						<h3>Kegiatan Terkini</h3>
						<ul style="list-style: none; padding: 0;">
							<li style="padding: 10px 0; border-bottom: 1px solid #eee;">
								<img src="{{ asset('images/icons/logo-01.png') }}" alt="Kegiatan" style="width: 40px; height: 40px; float: left; margin-right: 10px;">
								<div style="margin-left: 50px;"><strong>Seminar Nasional Riset</strong></div>
								<div style="margin-left: 50px; color: #666; font-size: 13px;">28 Des 2025 | Ruang Aula</div>
							</li>
							<li style="padding: 10px 0; border-bottom: 1px solid #eee;">
								<img src="{{ asset('images/icons/logo-01.png') }}" alt="Kegiatan" style="width: 40px; height: 40px; float: left; margin-right: 10px;">
								<div style="margin-left: 50px;"><strong>Workshop Inovasi</strong></div>
								<div style="margin-left: 50px; color: #666; font-size: 13px;">27 Des 2025 | Lab Teknologi</div>
							</li>
							<li style="padding: 10px 0; border-bottom: 1px solid #eee;">
								<img src="{{ asset('images/icons/logo-01.png') }}" alt="Kegiatan" style="width: 40px; height: 40px; float: left; margin-right: 10px;">
								<div style="margin-left: 50px;"><strong>Fokus Group Discussion</strong></div>
								<div style="margin-left: 50px; color: #666; font-size: 13px;">26 Des 2025 | Ruang Rapat</div>
							</li>
							<li style="padding: 10px 0;">
								<img src="{{ asset('images/icons/logo-01.png') }}" alt="Kegiatan" style="width: 40px; height: 40px; float: left; margin-right: 10px;">
								<div style="margin-left: 50px;"><strong>Penandatanganan MOU</strong></div>
								<div style="margin-left: 50px; color: #666; font-size: 13px;">25 Des 2025 | Kantor Rektorat</div>
							</li>
						</ul>
					</div>
					
					<div style="background-color: white; padding: 20px; border-radius: 5px;">
						<h3>Profil Singkat</h3>
						<p style="font-size: 14px; line-height: 1.6;">
							Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) Universitas Indonesia Makassar 
							berkomitmen untuk meningkatkan kualitas penelitian dan pengabdian kepada masyarakat 
							melalui kolaborasi lintas disiplin ilmu.
						</p>
						<div style="margin-top: 15px;">
							<h4 style="color: #007bff;">Visi</h4>
							<p style="font-size: 13px; margin: 5px 0;">Menjadi lembaga riset unggulan yang mendukung pengembangan ilmu pengetahuan dan teknologi.</p>
						</div>
						<div style="margin-top: 10px;">
							<h4 style="color: #28a745;">Misi</h4>
							<ul style="font-size: 13px; padding-left: 20px; margin: 5px 0;">
								<li>Mendorong penelitian berkualitas</li>
								<li>Memfasilitasi pengabdian kepada masyarakat</li>
								<li>Membangun jejaring kolaborasi</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Footer -->
	<footer class="footer" style="background-color: green; color: white; margin-bottom: 70px;">
		<div class="footer-top">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<h4>Tentang LPPM</h4>
						<p>Terhubung dengan Lembaga Penelitian dan Pengabdian Masyarakat UIM</p>
					</div>
					<div class="col-md-4">
						<h4>Link Terkait</h4>
						<ul>
							<li><a href="#">Universitas Indonesia Makassar</a></li>
							<li><a href="#">Pusat Penelitian</a></li>
							<li><a href="#">Pengabdian Masyarakat</a></li>
						</ul>
					</div>
					<div class="col-md-4">
						<h4>Kontak Kami</h4>
						<p>Email: lppm@uim.ac.id</p>
						<p>Telepon: (0411) 1234567</p>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom" >
			<div class="container">
				<p>&copy; 2025 LPPM UIM. Hak Cipta Dilindungi.</p>
			</div>
		</div>
	</footer>

	<!--===============================================================================================-->	
	<script src="{{ asset('vendor/jquery/jquery-3.2.1.min.js') }}"></script>
	<!--===============================================================================================-->
	<script src="{{ asset('vendor/animsition/js/animsition.min.js') }}"></script>
	<!--===============================================================================================-->
	<script src="{{ asset('vendor/bootstrap/js/popper.js') }}"></script>
	<script src="{{ asset('vendor/bootstrap/js/bootstrap.min.js') }}"></script>
	<!--===============================================================================================-->
	<script src="{{ asset('js/main.js') }}"></script>
</body>
</html>