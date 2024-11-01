library(magick)

head_shot <- image_read("HeadShotSmall.jpg")

hs <- list(length = 20)
hs[[1]] <- head_shot

for (i in 2:20) {
  hs[[i]] <- image_blur(hs[[i - 1]], 10, 1)
}

for (i in 1:20){
  print(image_scale(hs[[i]], "50%"))
  Sys.sleep(1)
}

image_animate(test, delay = 5000)

test <- c(hs[[19]], hs[[20]])
