<script>
	import { ChapterMenu } from "organisms";
import {
ChapterInteraktyviPage1
} from "pages/ChapterInteraktyvi";
import { fade } from "svelte/transition";
import { menuLinks } from "utils";

  
	let trigger1, trigger2, trigger3, trigger4, trigger5;
  </script>
  
  <svelte:head>
	<title>Interaktyvi pamoka</title>
  </svelte:head>
  
  <div class="absolute w-full bg-pamoka" out:fade in:fade>
	<ChapterMenu links={menuLinks} chapterHeader="Noble Rogues" />
	<div class="about_page sm:pt-120">
	  <ChapterInteraktyviPage1 bind:activeTrigger={trigger1} />		
	</div>	
  </div>
  
  <style global lang="postcss">
	.house {
	  margin-left: 5%;
	}
	.z-999{
	  z-index: 999;
	} 
	.about_page h2 {
		margin-bottom: 35px;
		font-weight: 900;
		font-family: Grafier, serif;
	}
	.about_page h5 {
		letter-spacing: 6px;
    	margin-bottom: 35px;
	}
	.about-2 .ab_jan {
    	max-width: 70%;
	}
	.bg-pamoka{
		background: #b7c9a8;
	}
	@screen sm {
		.house {
			max-width: 150%;
			margin-left: 25%;
			margin-right: -25%;
		}
		.ab_akio {
			width: 50%;
			margin: 0 auto;
			position: fixed;
			bottom: 15%;
			left: 0;
			right: 0;
		}
		.about-2 {
			max-width: 82%;
		}
		img.object-contain.ab_visa {
			max-width: 100px;
		}
		.f_area b {
			font-size: 14px;
		}
		.f_area p{
    		font-size: 13px;
		}
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1350px){
		.about-2{
			max-width: 480px;
		}
		img.object-contain.ab_visa {
			max-width: 170px;
			left: 40%;
		}
	}
  </style>
  