app.scriptPreferences.enableRedraw = false;
var files;
var folder = Folder.selectDialog("Select a folder with InDesign documents");
if (folder != null) {
	files = GetFiles(folder);
	if (files.length > 0) {
		alert("Found " + files.length + " InDesign documents");
		goGetMoney(files);
	}
	else {
		alert("Found no InDesign documents");
	}
}

function GetFiles(theFolder) {
	var files = [],
		fileList = theFolder.getFiles(),
		i, file;

	for (i = 0; i < fileList.length; i++) {
		file = fileList[i];
		if (file instanceof Folder) {
			files = files.concat(GetFiles(file));
		}
		else if (file instanceof File && file.name.match(/\.indd$/i)) {
			files.push(file);
		}
	}

	return files;
}





function goGetMoney(files) {
	// alert(files)





	for (i = 0; i < files.length; i++) {
		// alert(files[0])
		// var file_d = new File(path + "/" + filename);
		var fileN = files[i];
		var file_d_name = fileN.fsName;

		// alert(file_d_name)

		// app.open(Folder(Folder.selectDialog("Select a folder with InDesign files")).getFiles(function (f) { // open all indd files from folder
		// 	return f instanceof File && !f.hidden && (f.name.match(/\.indd$/i) || f.type.match(/^IDd/));
		// }));


		// Opens an existing document in the background,
		// var myDocumenttoOpeninBack = app.open(File("/c/myTestDocument.indd"), false);
		app.open(file_d_name); // merge
		// var myDocumenttoOpeninBack = app.open(File(file_d_name), false); // open in back
		// app.open(File(file_d_name), false);
		// file_d_name.open(); // nu merge
		// $.sleep(30000);
		if (i==(files.length-1)) {
			counteMymoney(files)
		}
		

		// countLines = countLines+1
	
	


		// app.documents[0].close(SaveOptions.no); // merge
		//// app.close(file_d_name)// nu merge
	}
}


function counteMymoney(files) {
	// ==================================================START PROGRESS BAR
var countLines_l = files.length
// alert(countLines_l)
var countLines = 0
var progressWin = CreateProgressBar();
progressWin.show();
progressWin.update(); // poate merge pe windows
progressWin.pb.minvalue = 0;
progressWin.pb.maxvalue = countLines_l;
app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;
CreateProgressBar()


function CreateProgressBar() {
    var w = new Window("window", "Se calculeaza");
    w.pb = w.add("progressbar", [12, 12, 650, 24], 0, undefined);
    w.st = w.add("statictext");
    w.st.bounds = [0, 0, 640, 20];
    w.st.alignment = "left";
    return w;
}
// ================================================== END PROGRESS BAR 1

for (i = 0; i < files.length; i++) {

	// ==================================================START PROGRESS BAR 2
// alert("count line total "+countLines_l)
	// alert("linia curenta" + i)
	progressWin.pb.value = i;
	progressWin.st.text = "Processing file - " + "  (" + i + " / " + countLines_l + ")";
	progressWin.update();
	// ==================================================  PROGRESS BAR END 2

	(function () {

		var myDocument = app.activeDocument;
		var myFile_calea = app.activeDocument.filePath.fsName;
		var myFileName = app.activeDocument.name;
		var varNrPoze = myDocument.allGraphics.length;

		if (app.documents.length > 0) {
			var ad = app.activeDocument;
			var tf = ad.textFrames;
			var tflg = tf.length;
			if (tflg > 0) {
				var wcount = 0;
				var chcount = 0;
				var pcount = 0;

				for (j = 0; j < tflg; j++) {
					var p = tf[j].paragraphs;
					for (l = 0; l < p.length; l++) {
						pcount += 1;
						// wcount += p[l].words.length;
						chcount += p[l].characters.length;
					}
				}

				// alert("Your document has:" + "\r"
				// 	+ "- " + tflg + " text frames" + "\r"
				// 	+ "- " + pcount + " paragraphs" + "\r"
				// 	+ "- " + wcount + " words" + "\r"
				// 	+ "- " + chcount + " characters (including spaces)" + "\r"
				// 	+ "- " + (chcount - spaced()) + " characters (not including spaces)", "Text Counter Script");
			}
		}

		// function spaced() {
		// 	app.findGrepPreferences = app.changeGrepPreferences = null;
		// 	app.findGrepPreferences.findWhat = "\s";
		// 	return app.activeDocument.findGrep().length;
		// }

		// var chcount =3
		var varpretCaractere = (Number(chcount) / 2000) * 0.17;
		var varpretPoze = Number(varNrPoze) * 0.75;
		var varpretTotal = Number(varpretPoze) + Number(varpretCaractere);

		var date = new Date();
		var year = new String((date.getYear()) - 100);
		var dateString = date.getDate() + "-" + (date.getMonth() + 1) + "-" + year + "  ora: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		var dateString_ziua = "" + date.getDate() + "_" + (date.getMonth() + 1) + "_" + year;

		// alert("data e: "+dateString)

		var message = "Nume fisier " + "\t" + myFileName + "\t";
		message += "Numar caractere " + "\t"+ chcount + "\t" + " Numar poze " + "\t" + varNrPoze + "\t" + " pret caractere la pagini " + "\t"
			+ varpretCaractere + "\t" + " pret la poze " + "\t" + varpretPoze + "\t" + " pret total " + "\t" + varpretTotal;//+  "\r"
		// message += "\r";





		// var path = '~/Desktop/';
		var path = myFile_calea;
		// var path =  '~/Desktop/script/lucru/test'; 
		//"~/Desktop/script/lucru/test"
		var filename = "__Pret total " + dateString_ziua + "_" + ".txt"; // merge!
		// var filename = "test_vizibil_si_total_.txt";

		// alert("filename: "+filename)

		//Create File object
		var file = new File(path + "/" + filename);

		// alert("file: "+filename+" filename: "+filename+" calea e "+myFile_calea)

		file.encoding = 'UTF-8';

		if (file.exists) {
			file.open("e");
			file.seek(0, 2);
		}
		else {
			file.open("w");
		}


		// file.open('w');
		file.write(message + "\r");
		file.close();

		// alert(message)
	}());
	app.documents[0].close(SaveOptions.no);
	// counteMymoney()
}
}