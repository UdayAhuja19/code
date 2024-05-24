from pytube import YouTube
from sys import argv 
import os
link = argv[1]
yt = YouTube(link)
print(yt.title)
yd = yt.streams.get_highest_resolution()
yd.download(os.getcwd())
