#notes:
python version needs to be 3.7 on hosting (i thought it was 3.6 locally but wont
work on that

#where files are stored (gdrive and github):
website files (on google drive) located at
C:\Users\jaket\Google Drive\work\allbarker\clients\peakoutdooradv\website\website

github repo: https://github.com/barkbarkgoose/peakoutdoor-site

#ssh:
Host allbark
        Hostname allbarker.com
        User allbark1

Host peakoutdoor
        Hostname peakoutdooradventures.com
        User peakoutd

#making updates:
- make changes locally
- add, commit, and push to github
- ssh to correct site (in this case ssh peakoutdoor is set up to do the right thing
  on Callisto)
- on the remote end git fetch/pull
  - **make sure to be at /home/peakoutd/website/project/peakoutdoor-site**
- collect static files if changes were made to css or javascript
  - make sure static files are located in correct place for hosting
