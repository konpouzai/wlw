javascript:var d=document;
  var CAST_LIST_URL="https://wonderland-wars.net/mycast.html";
  var CAST_URL="https://wonderland-wars.net/castdetail.html?cast=";
  if(d.URL==CAST_LIST_URL){
      var acqci=[];
      var acqcn=[];
        if(chkrolepage()){
            if(chkpage()){
               var ptbp=d.querySelectorAll('.tab_cast');
               var tabcnt=ptbp.length;
               var pbp;
                for(var ti=-1;ti<tabcnt;ti++){
                    if(ti!=-1){
                      ptbp[ti].click();
                      d=document;
                      var ptbp=d.querySelectorAll('.tab_cast')
                      }
                  getCastId();
                  getCastName();
                  var pbp=d.querySelectorAll('.page_block_page');
                  if(pbp.length!=0){
                    var pagecnt=pbp.length;
                    for(var i=0;i<pagecnt;i++){
                      pbp[i].click();
                      d=document;
                      getCastId();
                      getCastName();
                      pbp=d.querySelectorAll('.page_block_page')
                    }
                  }
                }
              ptbp[0].click();
              var now=new Date().getTime();
              var day=1000*3600*24;
              var ex=new Date();
              ex.setTime(now+day*365);
              d.cookie="acqci"+"="+escape(acqci.join(":"))+";
              expires="+ex.toUTCString();
              d.cookie="acqcn"+"="+escape(acqcn.join(":"))+";
              expires="+ex.toUTCString();
              alert("獲得済みキャスト情報取得が完了しました。\n各キャストのページでブックマークレットを実行することで、勝率などを確認できます。\n新たなキャストを獲得した場合は、再度獲得済みキャスト情報取得を行ってください。\n獲得済みキャスト数："+acqci.length)
            }
        }
  }
else if(d.URL.indexOf(CAST_URL)>=0){
  if(d.getElementById('wlw_custom')==null){
    var p1=d.querySelectorAll('.block_playdata_01_text');
    var ur=parseFloat(p1[0].innerHTML);
    var wc=parseInt(p1[1].innerHTML);
    var crc=parseInt(p1[2].innerHTML);
    var wdc=parseInt(p1[3].innerHTML);
    var p2=d.querySelectorAll('.block_playdata_02_text');
    var tp=parseFloat(p2[0].innerHTML);
    var wp=parseFloat(p2[1].innerHTML);
    var lp=parseFloat(p2[2].innerHTML);
    var tn=parseFloat(p2[3].innerHTML);
    var wn=parseFloat(p2[4].innerHTML);
    var ln=parseFloat(p2[5].innerHTML);
    var lc=0;if((tp-lp)!=0){
      lc=parseInt(Math.round((wp-tp)*wc/(tp-lp)))
    }
    var wr=0;
    if((wc+lc)!=0){
      wr=Math.round(wc/(wc+lc)*100*10)/10
    }
    var kr=0;
    if(wdc!=0){
      kr=Math.round(crc/wdc*100)/100
    }
    var awr=0;
    var awc=0;
    var alc=0;
    var cwra=[];
    var cwca=[];
    var clca=[];
    var dci=[];
    var dcn=[];
    if(d.cookie){
      var c=d.cookie.split(";");
      for(var i=0;i<c.length;i++){
        var kv=c[i].trim().split("=");
        if(kv[0]=="acqci"){
          dci=unescape(kv[1]).split(":")
        }
        else if(kv[0]=="acqcn"){
          dcn=unescape(kv[1]).split(":")
        }
      }
    }
    if(dci.length!=0){
      for(var i=0;i<dci.length;i++){
        cwra[dci[i]]=0;
        cwca[dci[i]]=0;
        clca[dci[i]]=0
      }
      var q=window.location.search.substring(1);
      var ci=q.split("=")[1];
      var pci="p"+ci;
      var now=new Date().getTime();
      var cd=[now,ur,wc,lc,wr,crc,wdc,kr,tp,wp,lp,tn,wn,ln];
      var pcd=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      var ppcd=pcd.concat();
      var day=1000*3600*24;
      var ex=new Date();
      ex.setTime(now+day*365);
      if(d.cookie){
        var c=d.cookie.split(";");
        for(var i=0;i<c.length;i++){
          var kv=c[i].trim().split("=");
          var tpcd=unescape(kv[1]).split(":");
          if(isFinite(kv[0])){
            var twc=parseInt(tpcd[2]);
            var tlc=parseInt(tpcd[3]);
            var twr=0;if((twc+tlc)!=0){twr=Math.round(twc/(twc+tlc)*100*10)/10}awc+=twc;alc+=tlc;cwra[kv[0]]=twr;cwca[kv[0]]=twc;clca[kv[0]]=tlc}if(kv[0]==ci){pcd=tpcd}if(kv[0]==pci){ppcd=unescape(kv[1]).split(":")}}}awc=awc-parseInt(pcd[2])+wc;alc=alc-parseInt(pcd[3])+lc;if((awc+alc)!=0){awr=Math.round(awc/(awc+alc)*100*10)/10}cwra[ci]=wr;cwca[ci]=wc;clca[ci]=lc;if(cd[1]!=pcd[1]||cd[2]!=pcd[2]||cd[8]!=pcd[8]||cd[9]!=pcd[9]||cd[10]!=pcd[10]){d.cookie=ci+"="+escape(cd.join(":"))+"; expires="+ex.toUTCString()}var base=new Date();base.setTime(pcd[0]);base.setHours(23);base.setMinutes(59);base.setSeconds(59);if(now>base.getTime()){d.cookie=pci+"="+escape(pcd.join(":"))+"; expires="+ex.toUTCString()}else{pcd=ppcd}var fi=d.querySelector('.frame_inner');var nfi=fi.cloneNode(true);nfi.id="wlw_custom";var p=nfi.querySelectorAll('.clearfix');function insert(i,t1,t2){var e=p[0].cloneNode(true);var t=e.getElementsByTagName('div');t[0].innerHTML=t1;t[1].innerHTML=t2;nfi.insertBefore(e,p[i])}insert(2,"敗北数",lc+"<span class=\"font_small\">敗</span>");insert(2,"勝率",wr+"%");insert(4,"Kill Ratio",kr);function diff(i,t){var iad=Math.round((cd[i]-pcd[i])*100)/100;var pm="±";if(iad>0){pm="+"}if(iad<0){pm="-";iad=Math.abs(iad)}t.innerHTML=t.innerHTML+" <span style=\"color:#ff0000;\" class=\"font_small\">("+pm+iad+")</span>"}var np1=nfi.querySelectorAll('.block_playdata_01_text');for(var i=0;i<7;i++){diff(i+1,np1[i])}var np2=nfi.querySelectorAll('.block_playdata_02_text');for(var i=0;i<6;i++){diff(i+8,np2[i])}insert(6,"全キャスト勝率",awr+"% <span class=\"font_small\">("+awc+"勝"+alc+"敗)</span>");for(var i=0;i<dci.length;i++){if((cwca[dci[i]]+clca[dci[i]])>0){insert(6,"<span class=\"font_90\">"+dcn[i]+"</span>",cwra[dci[i]]+"% <span class=\"font_small\">("+cwca[dci[i]]+"勝"+clca[dci[i]]+"敗)</span>")}}fi.parentNode.replaceChild(nfi,fi)}else{alert("獲得済みキャスト情報が取得できませんでした。\nマイキャスト一覧で獲得済みキャスト情報取得を実行してください。")}}}else{alert("実行するページを間違えています。\n下記のページで実行してください。\nマイキャスト一覧\n「"+CAST_LIST_URL+"」\n各キャストページ\n「"+CAST_URL+"XX」")}function chkrolepage(){var pbpo=d.querySelector('.tab_cast_on');if(pbpo!=null){if(pbpo.id!="fil_fig"){alert("獲得済みキャスト情報取得はファイターのタブで実行して下さい。");return false}}return true}function chkpage(){var pbpo=d.querySelector('.page_block_page_on');if(pbpo!=null){if(pbpo.textContent!="1"){alert("獲得済みキャスト情報取得は1ページ目で実行して下さい。");return false}}return true}function getCastId(){var urlstr;var splitstr=[];for(var i=0;i<d.links.length;i++){urlstr=d.links[i].toString();if(urlstr.match(/cast=/)){splitstr=urlstr.split("cast=");acqci.push(splitstr[1])}}}function getCastName(){var bcc=d.querySelectorAll('.block_cast_castname');for(var i=0;i<bcc.length;i++){acqcn.push(bcc[i].textContent)}}
