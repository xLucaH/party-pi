import React from 'react';


export const CostTable = () => {
    return (
        <div style={{ padding: '0 10px', marginBottom: '2em' }}>
            <table cellspacing="0" border='0'>
                <colgroup span="2" width="158"></colgroup>
                <tr>
                    <td height="19" align="left" valign='bottom' style={{ borderBottom: "1px solid #000000" }}><font color="#000000">Components</font></td>
                    <td align="right" valign='bottom' style={{ borderBottom: "1px solid #000000" }}><font color="#000000">Price</font></td>
                </tr>
                <tr>
                    <td height="19" align="left" valign='bottom'><font color="#000000">Raspberry PI Model 3 </font></td>
                    <td align="right" valign='bottom' sdval="50" sdnum="1033;0;#,##0 &quot;&euro;&quot;;[RED]-#,##0 &quot;&euro;&quot;"><font color="#000000">50 &euro;</font></td>
                </tr>
                <tr>
                    <td height="19" align="left" valign='bottom'><font color="#000000">Berry Base 3,5&quot; Display </font></td>
                    <td align="right" valign='bottom' sdval="18" sdnum="1033;0;#,##0 &quot;&euro;&quot;;[RED]-#,##0 &quot;&euro;&quot;"><font color="#000000">18 &euro;</font></td>
                </tr>
                <tr>
                    <td height="19" align="left" valign='bottom'><font color="#000000">Cables </font></td>
                    <td align="right" valign='bottom' sdval="5" sdnum="1033;0;#,##0 &quot;&euro;&quot;;[RED]-#,##0 &quot;&euro;&quot;"><font color="#000000">5 &euro;</font></td>
                </tr>
                <tr>
                    <td height="19" align="left" valign='bottom'><font color="#000000">Case 3D Printed</font></td>
                    <td align="right" valign='bottom' sdval="2" sdnum="1033;0;#,##0 &quot;&euro;&quot;;[RED]-#,##0 &quot;&euro;&quot;"><font color="#000000">2 &euro;</font></td>
                </tr>
                <tr>
                    <td height="19" align="left" valign='bottom'><font color="#000000">Micro SD Card 16GB</font></td>
                    <td align="right" valign='bottom' sdval="4" sdnum="1033;0;#,##0 &quot;&euro;&quot;;[RED]-#,##0 &quot;&euro;&quot;"><font color="#000000">4 &euro;</font></td>
                </tr>
                <tr>
                    <td style={{ borderBottom: "2px solid #000000" }} height="20" align="left" valign='bottom'><font color="#000000">Production</font></td>
                    <td style={{ borderBottom: "2px solid #000000" }} align="right" valign='bottom' sdval="30" sdnum="1033;0;#,##0 &quot;&euro;&quot;;[RED]-#,##0 &quot;&euro;&quot;"><font color="#000000">30 &euro;</font></td>
                </tr>
                <tr>
                    <td height="19" align="left" valign='bottom'><b><font color="#000000">TOTAL</font></b></td>
                    <td align="right" valign='bottom' sdval="109" sdnum="1033;0;#,##0 &quot;&euro;&quot;;[RED]-#,##0 &quot;&euro;&quot;"><b><font color="#000000">109 &euro;</font></b></td>
                </tr>
            </table>
        </div>

    );
};
