﻿//2019
/*

Copyright 2019 Dan Ichimescu 
All Rights Reserved
constantindan@gmail.com

Permission to use, copy, modify, and/or distribute this software
for any purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


*/
app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;
var myDocument = app.activeDocument;
var myPage = myDocument.pages[0];

app.scriptPreferences.measurementUnit = MeasurementUnits.POINTS;
app.documents[0].zeroPoint = [0, 0];
app.documents[0].viewPreferences.rulerOrigin = RulerOrigin.PAGE_ORIGIN;
app.activeWindow.transformReferencePoint = AnchorPoint.CENTER_ANCHOR;
app.activeDocument.viewPreferences.horizontalMeasurementUnits = app.activeDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.millimeters;


main();
function main() {
	b = myPage.bounds;
	// W_p = Math.round(((Math.abs(b[3]-b[1]))/2.83464567)); // mm  *100)/100
	// H_p = Math.round(((Math.abs(b[2]-b[0]))/2.83464567)); // mm


	W_p_abs = Math.abs(b[3] - b[1]) / 2.83464567; // 
	H_p_abs = Math.abs(b[2] - b[0]) / 2.83464567; //   
	W_p = Number(Math.round(W_p_abs + 'e2') + 'e-2') ///#
	H_p = Number(Math.round(H_p_abs + 'e2') + 'e-2') ///###

	app.activeDocument.viewPreferences.horizontalMeasurementUnits = app.activeDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.millimeters;

	var myFile_calea = app.activeDocument.filePath;
	// alert("calea e "+myFile_calea)	
	var myFileName_full = app.activeDocument.fullName + "";
	var myFileName = app.activeDocument.name + "";

	var myFileName_full_length = myFileName_full.length
	var myFileName_length = myFileName.length
	var length_descazut = myFileName_full_length - myFileName_length

	// var myFile_calea = myFileName_full.substr(0,length_descazut);
	// var myFile_calea = myFileName_full.replace(myFileName, ""); // X mare X mic

	// alert("calea e "+myFile_calea+"\r"+"|| myFileName e "+myFileName+"\r"+"|| myFileName_full e "+myFileName_full)


	// alert("calea e "+myFile_calea+"myFileName_full e "+myFileName_full+"myFileName e "+myFileName)

	var myFileName0 = myFileName.substr(0, myFileName.lastIndexOf("."));
	var myFileNamelength = myFileName0.length



	var myFileName1 = myFileName0.replace(/X/g, "x"); // X mare X mic

	var myFileName2 = myFileName1.replace(/\sx/g, "x"); // X mare X mic
	var myFileName3 = myFileName2.replace(/x\s/g, "x"); // X mare X mic
	var myFileName4 = myFileName3.replace(/\sx\s/g, "x"); // X mare X mic
	var myFileName5 = myFileName4.replace(/\s/g, "_"); // toate pauzele cu underscor
	var myFileName6 = myFileName5.replace(/x(\d)/g, /#$1/); // x cifra cu #
	var myFileName7 = myFileName6.replace(/\//g, "");

	var myFileNamelength7 = myFileName.length








	var matchicifre_replace0 = myFileName7.replace(/[A-Z]/g, "");
	var matchicifre_replace0a = matchicifre_replace0.replace(/[a-z]/g, "");
	var matchicifre_replace0b = matchicifre_replace0a.replace(/,/g, ".");

	var matchicifre_replace = matchicifre_replace0b.replace(/_+/g, "_");
	var matchicifre = matchicifre_replace.match(/\d+#\d+_\d+#\d+/); // merge pt nr fara virgula


	if (matchicifre == null) { // adica e doar o dimensiune - 2 cifre

		var matches_ocifre2 = myFileName7.match(/\d+#\d+/g);

		var matchicifre = matches_ocifre2[0]

	}
	else {						// doua dimensiuni - 4 cifre


		var matchicifre = matchicifre[0]

	}





	for (var i = 0; i < myFileNamelength; i++) {

		var matches_nr = matchicifre.match(/\d+/g);

	}





	var top_margine = myPage.marginPreferences.top;
	var left_margine = myPage.marginPreferences.left;
	var right_margine = myPage.marginPreferences.right;
	var bottom_margine = myPage.marginPreferences.bottom;











	var top_margine_mm_ = Number(Math.round((top_margine / 2.83464567) + 'e2') + 'e-2') ///#
	var left_margine_mm_ = Number(Math.round((left_margine / 2.83464567) + 'e2') + 'e-2') ///#
	var right_margine_mm_ = Number(Math.round((right_margine / 2.83464567) + 'e2') + 'e-2') ///#
	var bottom_margine_mm_ = Number(Math.round((bottom_margine / 2.83464567) + 'e2') + 'e-2') ///#






	var w_viz_doc = Number(Math.round((W_p - (left_margine_mm_ * 2)) + 'e2') + 'e-2') ///#
	var h_viz_doc = Number(Math.round((H_p - (top_margine_mm_ * 2)) + 'e2') + 'e-2') ///#


	var matches_lenght = matches_nr.length

	if (matches_lenght == 2) {   // doua dimensiuni doar



		var W = matches_nr[0]
		var H = matches_nr[1]

		var w = w_viz_doc
		var h = h_viz_doc


		// alert("w: "+w+" h: "+h+" W: "+W+" H: "+H)



	}


	if (matches_lenght >= 4) {


		if ((matches_nr[0] * matches_nr[1]) >= (matches_nr[2] * matches_nr[3]) //total e primu  300 X400 400X 500 la X coadace3va - Copy.indd


		) {
			var W = matches_nr[0]
			var H = matches_nr[1]
			var w = matches_nr[2]
			var h = matches_nr[3]




		}
		else {

			var w = matches_nr[0]
			var h = matches_nr[1]
			var W = matches_nr[2]
			var H = matches_nr[3]


		}

	}





	else {


	}









	var H_vizibil_nume_nr = Number(Math.round((h) + 'e2') + 'e-2') //// ##
	var W_vizibil_nume_nr = Number(Math.round((w) + 'e2') + 'e-2')
	var H_total_nume_nr = Number(Math.round((H) + 'e2') + 'e-2')
	var W_total_nume_nr = Number(Math.round((W) + 'e2') + 'e-2')



	var top_margine_dinnume = (H_total_nume_nr - H_vizibil_nume_nr) / 2; // in mm
	var left_margine_dinnume = (W_total_nume_nr - W_vizibil_nume_nr) / 2; // in mm
	var right_margine_dinnume = left_margine_dinnume;
	var bottom_margine_dinnume = top_margine_dinnume;


















	var date = new Date();
	var year = new String((date.getYear()) - 100);
	var dateString = date.getDate() + "-" + (date.getMonth() + 1) + "-" + year + "  ora: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	var dateString_ziua = "" + date.getDate() + "_" + (date.getMonth() + 1) + "_" + year;











	var top_margine_mm_a = Number(Math.round((top_margine_mm_ * 2.83464567) + 'e2') + 'e-2'); ////#####
	var top_margine_dinnume_a = Number(Math.round((top_margine_dinnume * 2.83464567) + 'e2') + 'e-2');






	var left_margine_mm_a = Number(Math.round((left_margine_mm_ / 2.83464567) + 'e2') + 'e-2'); ////######
	var left_margine_dinnume_a = Number(Math.round((left_margine_dinnume / 2.83464567) + 'e2') + 'e-2');












	pagebounds_top = 0
	pagebounds_left = 0
	pagebounds_right = (H_total_nume_nr * 2.83464567)
	pagebounds_bottom = (W_total_nume_nr * 2.83464567)



	pages = app.documents[0].pages
	pages[0].layoutRule = LayoutRuleOptions.OFF;
	pages[0].resize(CoordinateSpaces.SPREAD_COORDINATES,
		AnchorPoint.CENTER_ANCHOR,
		ResizeMethods.REPLACING_CURRENT_DIMENSIONS_WITH,
		[pagebounds_bottom, pagebounds_right])





	m_top = Number(Math.round((top_margine_dinnume * 2.83464567) + 'e2') + 'e-2')//+"mm"
	m_left = Number(Math.round((left_margine_dinnume * 2.83464567) + 'e2') + 'e-2')//+"mm"
	m_right = m_left
	m_bottom = m_top


	myPage.marginPreferences.properties = {
		top: m_top,
		left: m_left,
		right: m_right,
		bottom: m_bottom
	};
	// alert("top_margine_dinnume_a: "+m_top+" top_margine_dinnume_a: "+m_left)
	// top_margine_mm_a
	// top_margine_dinnume_a


	var myRectangle_ptvizibil;
	H_vizibil_nume_nr_pica = Number(Math.round((H_vizibil_nume_nr * 2.83464567) + 'e2') + 'e-2')
	W_vizibil_nume_nr_pica = Number(Math.round((W_vizibil_nume_nr * 2.83464567) + 'e2') + 'e-2')
	myRectangle_ptvizibil = myPage.rectangles.add({ geometricBounds: [m_top, m_left, m_top + H_vizibil_nume_nr_pica, m_left + W_vizibil_nume_nr_pica] });
	myRectangle_ptvizibil.label = "Vizibil";
	myRectangle_ptvizibil.fillColor = "None";
	myRectangle_ptvizibil.strokeColor = "None";
	myRectangle_ptvizibil = app.selection[0];










	if (top_margine_mm_a === top_margine_dinnume_a) {

		var varcorect_TOP_MARGINE = 0
		var textdeavertizare_TOP_MARGINE = "top_margine CORECTA!";
		// alert("if egal////!!! top_margine_mm  top_margine_dinnume e:"+top_margine_mm_a+"|"+top_margine_dinnume_a+"|"+(top_margine_dinnume_a-top_margine_mm_a))
	}

	else {
		var textdeavertizare_TOP_MARGINE = "top_margine  INCORECTA!";
		var varcorect_TOP_MARGINE = 1 // gresit adica
		// alert("if DIFERIT!!! top_margine_mm  top_margine_dinnume e:"+top_margine_mm_a+"|"+top_margine_dinnume_a+"|"+(top_margine_dinnume_a-top_margine_mm_a))
		//
	}

	if (left_margine_mm_a === left_margine_dinnume_a) {
		var varcorect_LEFT_MARGINE = 0
		var textdeavertizare_LEFT_MARGINE = "left_margine CORECTA!";
		// alert("EGAL left_margine_mm  left_margine_dinnume e: "+left_margine_mm+"   "+left_margine_dinnume)

	} else {

		var textdeavertizare_LEFT_MARGINE = "left_margine  INCORECTA!";
		var varcorect_LEFT_MARGINE = 2 //// gresit adica
		// alert("DIFERIT left_margine_mm  left_margine_dinnume e: "+left_margine_mm+"   "+left_margine_dinnume)
		//


	}



	if (W != W_p) {

		var textdeavertizaredimensiune1 = "Latimea (W) INCORECTA!";
		var varcorectlatimea = 1
	} else {

		var varcorectlatimea = 0
		var textdeavertizaredimensiune1 = "Latimea (W) CORECTA!";

	}



	if (H != H_p) {

		var textdeavertizaredimensiune2 = "Inaltimea (H) INCORECTA!";
		var varcorectinaltimea = 2
	} else {
		var varcorectinaltimea = 0
		var textdeavertizaredimensiune2 = "Inaltimea (H) CORECTA!";
	}


	if (varcorectlatimea != varcorectinaltimea) {

		var corectsauincorect = "GRESITE"
	} else {
		var corectsauincorect = "W si H sunt CORECTE"
	}



	if (varcorect_TOP_MARGINE != varcorect_LEFT_MARGINE) {

		var corectsauincorect_margini = "GRESITE"
	} else {
		var corectsauincorect_margini = "CORECTE"
	}


	if (varcorect_TOP_MARGINE != varcorect_LEFT_MARGINE + varcorectlatimea != varcorectinaltimea) {

		var corectsauincorect_general = "GRESITE"
	} else {
		var corectsauincorect_general = "CORECTE"
	}





	var message = "\r" + "Nume fisier: " + myFileName + "" + "\r";
	message += "\r";
	message += "W_total_nume   H_total_nume   w_vizibil_nume   h_vizibil_nume" + "\r";
	message += W_total_nume_nr + "		" + H_total_nume_nr + "		" + W_vizibil_nume_nr + "		" + H_vizibil_nume_nr + "\r";
	message += "\r"
	message += "Top margine: " + top_margine_dinnume + " | Left margine: " + left_margine_dinnume;
	message += "\r" + "\r";
	message += "data: " + dateString;
	message += "\r" + "\r"
	message += "********************* end ****************"
	message += "\r"




	var path = myFile_calea;

	//"~/Desktop/script/lucru/test"
	var filename = "test_SETpage_and_margins_vizibil_si_total_din_denumire" + dateString_ziua + "_" + ".txt"; // merge!





	var file = new File(path + "/" + filename);



	file.encoding = 'UTF-8';

	if (file.exists) {
		file.open("e");
		file.seek(0, 2);
	}
	else {
		file.open("w");
	}



	file.write(message + "\r");
	file.close();


}