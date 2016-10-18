import React from 'react';

var HowTo = React.createClass({
  render: function() {
    return (
      <div class="how-to">
      	<h1>How To</h1>
      	<p> This page contains all the information you need for doing henna at home, including
      	making your own paste, applying paste, and aftercare instructions. Below is a
      	complete outline of the page complete with links for navigating the page easily.
      	<ul>
      		<li><a href="#buy-paste">Buy Premade Henna</a></li>
      		<li><a href="#make">Make your own Henna</a>
      			<ul>
      				<li><a href="#buy">Buying Henna Powder</a></li>
      				<li><a href="#ingredients">Other Ingredients</a></li>
      				<li><a href="#mixing">Mixing the Paste</a>
      					<ul>
      						<li><a href="#sift">Sift the Powder</a></li>
      						<li><a href="#mix">Mix the Paste</a></li>
      						<li><a href="#wait">Wait for Dye Release</a></li>
      						<li><a href="#strain">Strain the Paste</a></li>
      						<li><a href="#fill">Fill Henna Cones</a></li>
      						<li><a href="#preserve">Preserve Your Paste</a></li>
      					</ul>
      				</li>
      			</ul> 
      		</li>
      		<li><a href="#apply">Apply Henna</a></li>
      		<li><a href="#aftercare">Aftercare</a>
      			<ul>
      				<li>Caring for the applied paste</li>
      				<li>Removing the Paste</li>
      				<li>Caring for the Stain</li>
      			</ul>
      		</li>
      	</ul>
      	</p>
      	<h2><a name="buy-paste" className="name">Buy Premade Henna</a></h2>
      	<p>
      	<img src="img/cones.jpg" className="right" width="230" />
      	Buying premade henna paste is a good option for both beginning and experienced artists. Making
      	henna paste can be complicated and challenging process.  It's important to buy 
      	premade paste from a reputable shop, since many manufacturers add harmful
      	chemicals such as PPD to get a darker stain.  If you see henna cones
      	sitting out at room temperature - don't buy them! Real henna paste
      	is perishable at room temperature and will quickly lose it's staining properties.
      	You can buy the paste in a big carrot bag, or in individually wrapped cones.
      	The best place to buy paste is homemade from a local henna artist, but if you don't 
      	have access to that below is a list of online suppliers of freshly-made henna paste.
      	<ul>
      		<li><a href="http://hennacaravan.com/shop/paste.html" target="_blank">Henna Caravan</a></li>
      		<li><a href="http://www.hennatrendz.com/hennatrendz/hennatrendz_shop.shtml" target="_blank">Henna Trendz</a></li>
      		<li><a href="http://henna.artisticadornment.com/henna-paste-henna-cones/" target="_blank">Artistic Adornment</a></li>
      	</ul>
      	</p>
		    <h2><a name="make" className="name">Make your own Henna</a></h2>
				<p> 
				Making the paste is one of the most challenging parts of the henna process.  Many different factors can affect the quality of the paste, in turn 
				affecting the stain.  Many henna artists opt to <a href="#buy-paste">buy premade henna paste</a> instead.  
				</p>
				
				<img src="img/henna_powder.png" className="left"/><h3><a name="buy" className="name">Buying Henna Powder</a></h3>
				<p> Fresh henna powder is essential.  The source of your henna powder is a crucial factor in the darkness of the stain.  
				This is because the <a href="https://en.wikipedia.org/wiki/Lawsone" target="_blank">lawsone</a> 
				 (the dye molecule in the plant) oxidizes over time.  So as the henna powder
				ages, less and less of the dye molecule will be available to bind to your skin.
				I recommend buying the most recent year of crop available for the darkest possible stain.
				</p>
				<p><a href="http://www.hennasooq.com/baq-henna-powder/">Henna Sooq</a> is a great site that currently has a fresh 2016 crop of Jamila henna.  
				The site lists the crop dates and lawsone content, and sells 5g samples of henna powder for as cheap as $1.00.   
				<a href="http://www.myhenna.us/">MyHenna.us</a> is also a site that I have had success with in the past, however
				their current crop of henna powder is pretty old (2014 crop).
				</p>
				<p>I've seen henna sold in bulk from <a href="https://www.frontiercoop.com/frontier-organic-red-powder-henna-leaf" target="_blank">Frontier Co-op</a> in glass jars at health food stores and food co-ops.
				However, this henna is intended to be used as hair dye is not good quality for body art.
				When I tried experimenting with this henna I noticed it had a grittiness to it, probably due
				to additives like sand.
				</p>
				
				<h3><a name="ingredients" className="name">Other Ingredients</a></h3>
				<p>In addition to the henna powder, several other ingredients are needed to make a quality paste.  <img src="img/lemon.png" className="right" width="200"/></p>
				<ul className="plain">
					<li><h4>A Sour Liquid</h4>
						<p>A sour, acidic liquid helps to break up the cellulose so the lawsone is available to bind to the skin.  Some examples of commonly used liquids are 
						lemon juice, grapefruit juice, lime juice, tamarind tea, black tea, coffee, and vinegar.</p></li>
					<li><h4>Sugar</h4><img className="right" src="img/piloncillo.png" width="200" />
						<p>Sugar creates a sticky, silky, smooth texture that helps the henna paste stick to the skin.  I like to use unrefined sugar
						because white table sugar contains fillers such as powdered animal bones, which can alter the texture of the paste.  
						Some examples of commonly used sugars are jaggery, piloncillo, dissolved candies, panela, fructose, 
						dextrose, and sucrose. </p></li>
					<li><h4>Essential Oils</h4>
						<p>Lawsone is hydrophobic, which means it is non-polar and is not dissolved by water.  
						Monoterpene alcohols, which are found in certain essential oils, dissolve the dye molecule, making it available 
						to bind with the keratin in skin. I recommend purchasing essential oils from a local herb farm if possible.  Try checking
						Farmer's Markets or asking members of the local food community.  If you are unable to locate a local supplier, <a href="https://www.mountainroseherbs.com/catalog/aromatherapy/essential-oils">
							Mountain Rose Herbs</a> has a wide variety of essential oils and utilizes organic, sustainable growing practices and business principles. 
							For more information on essential oils, see this journal article: 
						<a href="http://www.hennapage.com/journal/issue_III/article_3/page1.html"> Essential Oils: A user's guide for henna artists</a></p>
						</li>
				</ul>
				
				<h3><a name="mixing" className="name">Mixing the Paste</a></h3>
				<p>Once all of the ingredients are in place, its time to mix them together! I will post my simple recipe below.  There are many different recipes you can try. It's kind of like making cookies: people have unique recipes.  </p>
				<ul className="plain">
					<li><h4><a name="sift" className="name">Sift the Powder</a></h4>
						<p> To ensure a smooth textured paste, many people like to sift the henna powder before mixing it to remove any
						chunks, twigs, or other matter.  One method is to cover the opening of a small jar with a panty-hose and use a quarter
						to knock the powder through to the other side.  Whatever is left in the pantyhose can be discarded.  I've included a small
						video courtesy of FreeHandMehndi which shows how to sift the powder.  Note that this step is optional, especially if you plan
						to <a href="#strain">strain the paste</a>.
						<br /><br />
						<iframe width="560" height="315" src="https://www.youtube.com/embed/rSRwSxzX4V8" frameborder="0" allowfullscreen></iframe>
						</p>
					</li>
					<li><h4><a name="mix" className="name">Mix the Paste</a></h4>
					<figure className="right">
						<img src="img/mixed-paste.jpg" className="right" width="300"/>
						<figcaption className="caption">
							Image Credit: <a href="http://hennaguru.com/recipe/">Henna Lounge</a>
						</figcaption>
					</figure>
					<h5>Ingredients</h5>
					<ul><li>100 grams fresh henna powder</li>
						<li>1 cup sour liquid</li>
						<li>2 tbsp sugar</li>
						<li>5 ml Essential Oils such as Cajeput, Tea Tree, Lavendar, Frankincense, and Ravensara</li>
					</ul>
					<h5>Instructions</h5>
					<ol>
						<li>Dissolve sugar into the sour liquid</li>
						<li>Pour the henna powder into a large non-metal bowl (wood or ceramic works well since henna will stain plastic)</li>
						<li>Mix small amounts of sour liquid mixture into the powder using a non-metal spoon, until the henna becomes a smooth paste.</li>
						<li>Wait 8-24 hours for the henna dye to fully release.</li>
						<li>Mix in a teaspoon of essential oils.</li>
						<li>Wait at least 1 hour after adding the essential oils to use the paste.</li>
					</ol>
					</li>
					<li><h4><a name="wait" className="name">Wait for Dye Release</a></h4>
					  <p>It can take anywhere from 2 hours to several days for henna paste to release dye,
					  depending upon temperature.  After the dye is released, it will 
					  slowly begin binding to oxygen and won't be able to bind to your skin.  
					  <br/>
						Cover your henna paste with plastic wrap, put it in an airtight container, 
					  and put it somewhere it won't get disturbed.  I like to mix my henna 
					  in a glass pyrex container, and cover the paste with plastic wrap.
					  Next I place a white tissue on top of the plastic wrap before putting the lid
					  on as well. The tissue helps to indicate whether the paste is ready 
					  or not: when the dye has released, it will turn slightly orange.  
					  The lid protects the paste from oxidation.
					  Another way to tell if the dye has released is to use the palm test (
					  <a href="http://hennablogspot.com/the-deal-on-dye-release-testing-your-henna-paste-for-a-more-effective-stain/">courtesy of Vanessa
					  from Henna Sooq</a>): place a small dab of paste on the inside of your palm and wait exactly 5 minutes.
					  The paste is ready if it leaves a pumpkin orange stain.
					  This chart shows optimal dye release as a function of time and temperature.
						<figure>
							<img src="img/timetemp.jpg" />
							<figcaption className="caption">
								Image Credit: Catherine Cartwright-Jones, <a href="http://www.hennapage.com/henna/how/dyerelease.html">The Henna Page</a></figcaption>
						</figure>
					  </p>
					</li>
					<li><h4><a name="strain" className="name">Strain the Paste</a></h4>
					  <p>Once the dye has released, a lot of artists like to strain the paste
					  to ensure a smooth and even texture.  The paste can be strained using
					  a carrot/piping bag and a nylon stocking.  Here's a quick tutorial video
					  which shows how to strain the henna paste.<br/> <br />
					  <iframe width="560" height="315" src="https://www.youtube.com/embed/6MvQ0nLD-28" frameborder="0" allowfullscreen></iframe>
					  </p>
					</li>
					<li><h4><a name="fill" className="name">Roll and Fill the Cones</a></h4>
					Next, you will want to put your henna in something.  I like to roll
					and fill mylar cones, but you can also use a jacquard bottle.  Below
					are a couple of quick tutorials courtesy of <a href="http://www.hennasooq.com">Henna Sooq</a> which
					demonstrate how to roll and fill henna cones.<br /><br />
					<iframe width="560" height="315" src="https://www.youtube.com/embed/D4cdQve507U" frameborder="0" allowfullscreen></iframe>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/iZVuskLUDEI" frameborder="0" allowfullscreen></iframe>
					</li>
					<li><h4><a name="preserve" className="name">Preserve the Paste</a></h4>
					Once your paste is complete, you'll need to preserve it in the freezer
					if you want it to last more than a few days.  Protecting it from
					light, heat, and air is the key to keeping the henna fresh. Stored
					in an airtight, lightproof container in the freezer, henna paste
					will keep fresh for about 6 months.  Storing henna paste
					in the fridge will keep it fresh for about 3-4 days.  
					</li>
				</ul>
				<h2><a name="apply" className="name">Apply the Paste</a></h2>
				<p>
					<figure className="left">
						<img src="img/apply-paste.jpg" width="300"/>
						<figcaption className="caption">
							Image Credit: <a href="http://beauty.onehowto.com/article/how-to-apply-mehndi-for-beginners-2625.html">One How To</a>
						</figcaption>
					</figure>
				Applying henna paste is relatively straightforward.  If you're
				using a mylar cone, just cut the tip to the desired size and squeeze the cone.  As 
				the henna in the cone drains, you'll need to tighten it up in order
				to continue using the cone.  If you're using a jacquard bottle,
				you'll need to regularly fill up the bottle with more henna.  Your
				skill at applying henna will improve with practice.  Try practicing 
				your designs on a sheet of paper.  
				<a href="http://www.hennapage.com/henna/what/freebooks/index.html"> The Henna Page</a> has
				a lot of free designs to try out, and also has a <a href="http://www.hennapage.com/henna/what/lineart/index.html">tutorial</a> on the basic
				elements of making your own henna patterns.
				</p>
	
				<h2><a name="aftercare" className="name">Aftercare</a></h2>
				<h3>Caring for the Applied Paste</h3>
				<p>The longer the henna stays in contact with your skin, the darker the stain
				will be and the longer it will last.  Sealing the henna design
				will keep the paste on your skin as long as possible.  Many different products
				can be used to seal: lemon-sugar syrup,
				Elmer's glue, liquid bandage, peel-off facial masques, liquid latex, or 
				gel hairspray.  Once the henna paste is completely dry, cover the design
				with your choice of sealant.  Be careful not to disturb the pattern.  Wrapping
				the area with gauze or cloth is an effective way of adding additional protection
				while simultaneously keeping the area warm.  Heating the area of skin the henna
				is on will cause a darker stain - heat makes the keratin molecules of your skin
				stretch out so they will bind more easily with the dye molecules.</p>
				<h3>Removing the Paste</h3>
				<p>
				To remove the paste, don't wash with water.  Instead, gently brush or scrape
				the paste off.  Many people simply let the paste fall off on it's own.</p>
				
				<h3>Caring for the Stain</h3>
				<p> Protect the stain by applying a balm made from vegetable oil or beeswax.  
				    Avoid contact with water for the next 24 hours.  The more you wash,
				    rub, or irritate the stain, the faster the it will fade.
				</p>
			</div>
    );
  }
});
export default HowTo;

