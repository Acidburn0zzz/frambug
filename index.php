<?php
include('inc/begin.php');
?>
	
		<div id="corps">
	
			<div id="welcome">
				<h1>Frambug : Bienvenue <?php if ( isset($_SESSION['realname'])) echo $_SESSION['realname']; ?></h1> 
			</div>
			
			<div class="h2" ></div>
					
			<div id="actions">
				<h2>Déclarer un bug</h2>
			</div>
			
			<div class="h2" ></div>
		

			<div id="logo">
				<img class="inline" style="height: 16px;" src="favicon.svg" />
				Frambug <?php echo date("Y"); ?>
				<img class="inline" style="height: 16px;" src="favicon.svg" />
			</div>
			
		</div>
	
	<script>document.title = "Frambug";</script>
<?php
include('inc/end.php');
?>
