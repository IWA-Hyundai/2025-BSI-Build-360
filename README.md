# 2025-BSI-Build-360

These are the source files for the interactive 360 exterior BSI Build prototype : https://hyundai.innoceanusa.com/2025/bsi/build-360/hyundai-BSI-exterior360-v1.html

This prototype covers
-Implementation of ease360-0.2.75.js framework for use in the BSI build 360.  The ease360.js is a public Github repo found here https://github.com/ddintzner/ease360. 
-Animated angles on triggered events. The direction of the spin follows the shortest distance to destination angle, hence no motion will be greater than 180 degrees. Timings on motion.
-Overlay loading graphic behaviours. The loading graphic should stay up for a minumium of 0.5s before fading off. The loading graphic should only come up once per color change, not on revisting a color. The overlay graphic should fade off, not toggle off.
-Use of optimized image sets for each breakpoint
-The 'damping' setting has been adjusted to '0.925' on initialization
