import os
SECRET_KEY = os.urandom(32)

from flask import Flask, render_template, session, flash, redirect, url_for
from flask_wtf.csrf import CsrfProtect
from routes.user import route_user
from routes.contacts import route_contacts
from routes.leads import route_leads
from routes.rejection import route_rejection
from routes.contacts_details import route_contacts_details
from routes.campaign import route_campaign
from routes.lists import route_lists
from routes.products import route_products
from routes.vendors import route_vendors
from routes.dashboard import route_dashboard
from routes.clients import route_clients
from routes.menu import route_menu

from routes.designations import route_designations
from routes.departments import route_departments


from routes.leads_bde import route_leads_bde
from routes.leads_leadgen import route_leads_leadgen
from routes.engagements import route_engagements
from routes.payments import route_payments
from routes.finance import route_finance

from routes.dashboard_bde import route_dashboard_bde

from routes.settings import route_settings
from routes.reports import route_reports
from routes.bde_reports import route_bde_reports
from routes.leadgen_reports import route_leadgen_reports 
from routes.sales_reports import route_sales_reports 
from routes.pipeline_reports import route_pipeline_reports

from routes.settings_page import route_settings_page
#
from routes.demo import route_demo
#
from routes.leadgen_reports_new import route_leadgen_reports_new
from routes.pivot import route_pivot
from routes.pivotleadgen import route_pivotleadgen
from routes.pivotbde import route_pivotbde
from routes.pivotsales import route_pivotsales
from routes.pivotpipeline import route_pivotpipeline
from routes.contactsnew import route_contactsnew
from routes.pivotreport import route_pivotreport
from routes.search import route_search
from routes.mycontacts import route_mycontacts
from routes.company_search import route_company_search
from routes.contact_search import route_contact_search

from flask_jsglue import JSGlue

app = Flask(__name__)
jsglue = JSGlue(app)


CsrfProtect(app)
app.config['SECRET_KEY'] = SECRET_KEY

app.register_blueprint(route_user, url_prefix="/user/")
app.register_blueprint(route_contacts, url_prefix="/contacts/")
app.register_blueprint(route_leads, url_prefix="/leads/")
app.register_blueprint(route_rejection, url_prefix="/rejected/")
app.register_blueprint(route_leads, url_prefix="/contacts-details/")
app.register_blueprint(route_campaign, url_prefix="/campaigns/")
app.register_blueprint(route_lists, url_prefix="/lists/")
app.register_blueprint(route_products, url_prefix="/products/")
app.register_blueprint(route_vendors, url_prefix="/vendors/")
app.register_blueprint(route_dashboard, url_prefix="/dashboard/")
app.register_blueprint(route_clients, url_prefix="/clients/")

app.register_blueprint(route_designations, url_prefix="/designations/")
app.register_blueprint(route_departments, url_prefix="/departments/")
app.register_blueprint(route_menu, url_prefix="/menu/")
app.register_blueprint(route_leads_bde, url_prefix="/bde/")
app.register_blueprint(route_leads_leadgen, url_prefix="/leadgen/")
app.register_blueprint(route_engagements, url_prefix="/engagements/")
app.register_blueprint(route_dashboard_bde, url_prefix="/dashboard_bde/")
app.register_blueprint(route_payments, url_prefix="/payments/")
app.register_blueprint(route_finance, url_prefix="/finance/")

app.register_blueprint(route_settings, url_prefix="/settings/") 
app.register_blueprint(route_settings_page,url_prefix="/settings_page")

#
app.register_blueprint(route_demo,url_prefix="/demo")
#

app.register_blueprint(route_reports, url_prefix="/reports/")
app.register_blueprint(route_bde_reports, url_prefix="/bde_reports/")
app.register_blueprint(route_leadgen_reports, url_prefix="/leadgen_reports/")
app.register_blueprint(route_sales_reports, url_prefix="/sales_reports/")
app.register_blueprint(route_pipeline_reports, url_prefix="/pipeline_reports/")
app.register_blueprint(route_pivotreport, url_prefix="/pivotreport/")

app.register_blueprint(route_leadgen_reports_new, url_prefix="/leadgen_reports_new/")
app.register_blueprint(route_pivot, url_prefix="/pivot/")
app.register_blueprint(route_pivotleadgen, url_prefix="/pivotleadgen/")
app.register_blueprint(route_pivotbde, url_prefix="/pivotbde/")
app.register_blueprint(route_pivotsales, url_prefix="/pivotsales/")
app.register_blueprint(route_pivotpipeline, url_prefix="/pivotpipeline/")
app.register_blueprint(route_contactsnew, url_prefix="/contactsnew/")
app.register_blueprint(route_search, url_prefix="/search/")
app.register_blueprint(route_mycontacts, url_prefix="/mycontacts/")
app.register_blueprint(route_company_search, url_prefix="/company_search/")
app.register_blueprint(route_contact_search, url_prefix="/contact_search/")



@app.route("/")
def hello():
    return redirect(url_for('user.login'))


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)


    