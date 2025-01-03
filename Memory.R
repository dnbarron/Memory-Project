library(magick)

head_shot <- image_read("HeadShotSmall.jpg")

hs <- list(length = 30)
hs[[1]] <- head_shot

for (i in 2:30) {
  hs[[i]] <- image_noise(hs[[i - 1]], noisetype = "Poisson")
}

hs_c <- hs[[1]]
for (i in 1:30){
  hs_c <- image_join(hs_c, hs[[i]])
}

image_animate(image_scale(hs_c, "50%"), delay = 100)



