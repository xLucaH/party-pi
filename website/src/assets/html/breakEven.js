import React from 'react'

const BreakEven = () => {
    return (
        <table cellSpacing={0} border={0}>
            <colgroup width={160} />
            <colgroup width={154} />
            <colgroup width={638} />
            <colgroup width={94} />
            <tbody><tr>
                <td style={{ borderTop: '1px solid #000000', borderBottom: '2px solid #000000' }} height={20} align="left" valign="bottom"><font color="#000000">Cost Type</font></td>
                <td style={{ borderTop: '1px solid #000000', borderBottom: '2px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Subcategory</font></td>
                <td style={{ borderTop: '1px solid #000000', borderBottom: '2px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="center" valign="bottom"><font color="#000000">Product</font></td>
                <td style={{ borderTop: '1px solid #000000', borderBottom: '2px solid #000000', borderLeft: '1px solid #000000' }} align="center" valign="bottom"><font color="#000000">Costs</font></td>
            </tr>
                <tr>
                    <td height={19} align="left" valign="middle"><font color="#000000">Fixed Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Product-fixed Costs</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000"> Original Prusa i3 MK3S+ 3D printer 1x (99,99€ monthly) </font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval={999} sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">999.00 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="middle"><font color="#000000">Fixed Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Product-fixed Costs</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000"> Z ZELUS 2 IN 1 Digitale SMD Entlötkolben Heißluft Löten Lötstation Entlötstation Lötkolben 1x</font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="59.99" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">59.99 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="middle"><font color="#000000">Fixed Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Product-fixed Costs</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="middle"><font face="Arial" color="#0F1111">LARS360 208-tlg Werkzeugkoffer Universal Alu Werkzeugset</font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="79.99" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">79.99 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="middle"><font color="#000000">Fixed Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Product-fixed Costs</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="middle"><font color="#000000">Antistatische arbeitsmatte  2x</font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="43.98" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">43.98 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="middle"><font color="#000000">Fixed Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Product-fixed Costs</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="middle"><font face="Arial" color="#0F1111">UGREEN USB 3.0 SD TF Kartenleser USB 2x</font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="32.36" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">32.36 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="bottom"><font color="#000000"><br /></font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000"><br /></font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000"><br /></font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="1215.32" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">1,215.32 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="bottom"><font color="#000000">Fixed Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Product-Fixed Costs</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Salary (annually)</font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval={90000} sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">90,000.00 €</font></td>
                </tr>
                <tr>
                    <td style={{ borderBottom: '2px solid #000000' }} height={20} align="left" valign="bottom"><font color="#000000">Fixed Costs</font></td>
                    <td style={{ borderBottom: '2px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Product-Fixed Costs</font></td>
                    <td style={{ borderBottom: '2px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Marketing-Department Budget (annually)</font></td>
                    <td style={{ borderBottom: '2px solid #000000', borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval={6000} sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">6,000.00 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="bottom"><font color="#000000">Variable Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Per Piece</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Raspberry PI Model 3 </font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval={50} sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">50.00 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="bottom"><font color="#000000">Variable Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Per Piece</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Berry Base 3,5" Display </font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval={18} sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">18.00 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="bottom"><font color="#000000">Variable Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Per Piece</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Cable for connecting the button</font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="5.99" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">5.99 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="bottom"><font color="#000000">Variable Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Per Piece</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Polymaker | PolyTerra™ PLA - Lavender Purple (1.75mm/1kg 19,99  50 gramms per pressure  = 0,99€ </font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="0.99" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">0.99 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="bottom"><font color="#000000">Variable Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Per Piece</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Lötzinn, Bleifreies Lot mit Kolophonium Kern (Sn99,3 Cu0,7/0,8mm,100g 15,97) 1 gram per soldering = 0,15€ </font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="0.15" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">0.15 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="bottom"><font color="#000000">Variable Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Per Piece</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Schrumpfschlauch 2mm innen / 1 M </font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="0.15" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">0.15 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="bottom"><font color="#000000">Variable Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Per Piece</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="middle"><font color="#0F1111">Verbatim Premium microSDHC Speicherkarte&nbsp;</font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="4.39" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">4.39 €</font></td>
                </tr>
                <tr>
                    <td height={19} align="left" valign="bottom"><font color="#000000">Variable Costs</font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Per Piece</font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Packaging</font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="4.99" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000">4.99 €</font></td>
                </tr>
                <tr>
                    <td style={{ borderBottom: '2px double #000000' }} height={20} align="left" valign="bottom"><font color="#000000">Variable Costs</font></td>
                    <td style={{ borderBottom: '2px double #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Per Piece </font></td>
                    <td style={{ borderBottom: '2px double #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000">Delivery costs are included in the price of the materials</font></td>
                    <td style={{ borderBottom: '2px double #000000', borderLeft: '1px solid #000000' }} align="left" valign="bottom" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><font color="#000000"><br /></font></td>
                </tr>
                <tr>
                    <td height={20} align="left" valign="bottom"><font color="#000000" ></font></td>
                    <td style={{ borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000"></font></td>
                    <td style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000' }} align="left" valign="bottom"><font color="#000000" style={{ fontWeight: 'bold' }}>FINAL PRICE</font></td>
                    <td style={{ borderLeft: '1px solid #000000' }} align="right" valign="bottom" sdval="84.66" sdnum="1033;0;#,##0.00 &quot;€&quot;;[RED]-#,##0.00 &quot;€&quot;"><b><font color="#385724">84.66 €</font></b></td>
                </tr>
            </tbody></table>
    )
};

export default BreakEven;