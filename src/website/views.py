from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect, HttpResponse, HttpResponseBadRequest, JsonResponse

import pdb, sys, logging, secrets, syslog, json

'''
--- commands I've put in the shell to test logging ---
### for the most part you can just call syslog.syslog("message") anywhere you want that to be done

syslog.syslog("a syslog message from the python shell, no arguments")
syslog.syslog(syslog.LOG_INFO, "a syslog message from the python shell, level: info")
syslog.syslog(syslog.LOG_DEBUG, "a syslog message from the python shell, level: debug")
syslog.syslog(syslog.LOG_LOCAL7, "a syslog message from the python shell, level: local7")


'''

# ------------------------- HELPER CLASSES/FUNCTIONS ---------------------------
class DictToClass:
    """
    create class instance based on given dictionary
    """
    def __init__(self, dictionary):
        for k, v in dictionary.items():
            setattr(self, k, v)


# ---------------------------------- VIEWS -------------------------------------
# Create your views here.
def index(request):
    return render(request, 'main/index.html')












# ------------------------------------------------------------------------------
def handler404(request, *args):
    # right now both 404 and 500 errors will go through this
    return redirect('/') #redirect to a real page
