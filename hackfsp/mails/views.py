from django.shortcuts import render
from django.core import mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from rest_framework.decorators import api_view


@api_view(['POST'])
def mail_post(request, file: str, email: str):
    if request.method == 'POST':
        subject = ''
        html_message = render_to_string('mail_template.html', {'context': 'values'})
        plain_message = strip_tags(html_message)
        from_email = 'adm.digital.bastion@gmail.com'
        
        mail.send_mail(subject, plain_message, from_email, [email], html_message=html_message)
        