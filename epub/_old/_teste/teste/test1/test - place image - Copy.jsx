var frameDepth = 10;
var frameWidth = 85;
var leftInset = 2;
var topInset = 2;
var str = "some text in first line";
str += "\n";
str += "some text in second line";
//last line of main string needs hard return
str += "\r";
var nContent = "This is content for inner frame";
app.scriptPreferences.measurementUnit = MeasurementUnits.MILLIMETERS;
var pageRef = document.pages.item(0);
var tFrame = pageRef.textFrames.add();
tFrame.geometricBounds = [10, 10, 100, 100];
tFrame.contents = str;
var insertRef = tFrame.insertionPoints[-1];
insertRef.spaceBefore = topInset; 
insertRef.leftIndent = leftInset;
var eFrame = insertRef.textFrames.add();
y0 = eFrame.geometricBounds[0];
x0 = (eFrame.geometricBounds[1] + leftInset);
eFrame.geometricBounds = [y0, x0, y0 + frameDepth, x0 + frameWidth],
    eFrame.strokeWeight = "2 pt";
eFrame.fillColor = "None";
eFrame.textFramePreferences.verticalJustification = VerticalJustification.CENTER_ALIGN;
eFrameInsert = eFrame.insertionPoints[0];
eFrameInsert.justification = Justification.CENTER_ALIGN;
eFrameInsert.contents = nContent;