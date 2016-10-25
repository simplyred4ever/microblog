!function(P){"use strict";var b="ht",j=P[b],i=Math,U=i.max,o=i.min,Z=i.abs,L=i.atan2,d=i.cos,y=i.sin,M=i.ceil,n=j.Default,k=n.getInternal(),z=j.List,N=k.Mat,q=k.getNodeRect,v=k.intersectionLineRect,T=n.getDistance,s=n.setEdgeType,r="left",A="right",W="top",I="bottom",w="edge.type",R="edge.gap",t="edge.center",C="edge.extend",Q=function(N,Y){return q(N,Y).width},G=function(O,N){return q(O,N).height},V=function(y,r){var I=k.getPosition(r.s("edge.source.position"),q(y,r._40I));return I.x+=r.s("edge.source.offset.x"),I.y+=r.s("edge.source.offset.y"),I},S=function(u,U){var O=k.getPosition(U.s("edge.target.position"),q(u,U._41I));return O.x+=U.s("edge.target.offset.x"),O.y+=U.s("edge.target.offset.y"),O},J=function(S,z){var Y=S.s(w),C=S.getEdgeGroup();if(C){var W=0;if(C.eachSiblingEdge(function(h){z.isVisible(h)&&h.s(w)==Y&&W++}),W>1)return S.s(R)*(W-1)/2}return 0},x=function(b,k){var e=b.s(w),I=b.isLooped();if(!b.getEdgeGroup())return I?b.s(R):0;var u,P=0,T=0,g=0;return b.getEdgeGroup().getSiblings().each(function(A){A.each(function(U){if(U._40I===b._40I&&U.s(w)==e&&k.isVisible(U)){var c=U.s(R);u?(T+=g/2+c/2,g=c):(u=U,g=c),U===b&&(P=T)}})}),I?T-P+g:P-T/2},H=function(m,i){var Q=m.size(),v=i.s("edge.corner.radius");if(0===v)return{points:m,segments:new z([1,Q])};if(0>v)return{points:m};var f,E=new z,$=new z,N=m.get(0);E.add(N),$.add(1);for(var X=1;Q>X;X++)if(Q>X+1){var a=m.get(X),A=m.get(X+1),e=N.x,W=N.y,c=a.x,J=a.y,l=J-W,B=c-e,u=L(l,B);f=o(.99*T(N,a),v),E.add({x:c-f*d(u),y:J-f*y(u)}),E.add(a),e=a.x,W=a.y,c=A.x,J=A.y,l=J-W,B=c-e,u=L(l,B),f=o(.99*T(a,A),v),N={x:e+f*d(u),y:W+f*y(u)},E.add(N),$.addAll([2,3])}else E.add(m.get(X)),$.add(2);return{points:E,segments:$}};k.addMethod(j.Style,{"edge.ripple.elevation":-20,"edge.ripple.size":1,"edge.ripple.both":!1,"edge.ripple.straight":!1,"edge.ripple.length":-1,"edge.corner.radius":-1,"edge.ortho":.5,"edge.flex":20,"edge.extend":20},!0),s("boundary",function(_,F,A,e){e||(F=-F);var y,t=V(A,_),M=S(A,_),B=q(A,_._40I),X=q(A,_._41I),Y=new N(L(M.y-t.y,M.x-t.x)),I=T(t,M),E=t.x,W=t.y;return y=Y.tf(0,F),t={x:y.x+E,y:y.y+W},y=Y.tf(I,F),M={x:y.x+E,y:y.y+W},y=v(t,M,B),y&&(t={x:y[0],y:y[1]}),y=v(t,M,X),y&&(M={x:y[0],y:y[1]}),{points:new z([t,M])}}),s("ripple",function(j,w,H,q){q||(w=-w);var P=V(H,j),Z=S(H,j),y=T(P,Z),F=o(j.s("edge.offset"),y/2),h=j.s("edge.ripple.size"),X=j.s("edge.ripple.length"),v=j.s("edge.ripple.both"),C=j.s(t),d=j.s("edge.ripple.elevation"),D=new z,s=j.s("edge.ripple.straight")?null:new z,I=new N(L(Z.y-P.y,Z.x-P.x));q||(d=-d),y-=2*F,X>0&&(h=M(y/X));var m=y/h;s&&s.add(1);for(var W=0;h>W;W++)s&&s.add(3),0===W?D.add({x:F+m*W,y:C?0:w}):D.add({x:F+m*W,y:w}),D.add({x:F+m*W+m/2,y:d+w}),v&&(d=-d);for(D.add({x:F+y,y:C?0:w}),W=0;W<D.size();W++){var R=I.tf(D.get(W));R.x+=P.x,R.y+=P.y,D.set(W,R)}return{points:D,segments:s}}),s("h.v",function(J,u,L){u=x(J,L);var w=new z,f=J.s(t),g=V(L,J),a=g.x,T=g.y,$=S(L,J),d=$.x,D=$.y,o=0,q=0,r=d-a,e=D-T;return f||(o=Q(L,J._40I)/2,q=G(L,J._41I)/2),r>=0&&0>=e?(w.add({x:a+o,y:T+u}),w.add({x:d+u,y:T+u}),w.add({x:d+u,y:D+q})):0>=r&&e>=0?(w.add({x:a-o,y:T+u}),w.add({x:d+u,y:T+u}),w.add({x:d+u,y:D-q})):r>=0&&e>=0?(w.add({x:a+o,y:T+u}),w.add({x:d-u,y:T+u}),w.add({x:d-u,y:D-q})):(w.add({x:a-o,y:T+u}),w.add({x:d-u,y:T+u}),w.add({x:d-u,y:D+q})),H(w,J)}),s("v.h",function(i,v,e){v=x(i,e);var I=new z,a=i.s(t),E=V(e,i),Y=E.x,R=E.y,y=S(e,i),U=y.x,w=y.y,L=0,B=0,b=U-Y,g=w-R;return a||(L=Q(e,i._41I)/2,B=G(e,i._40I)/2),b>=0&&0>=g?(I.add({x:Y+v,y:R-B}),I.add({x:Y+v,y:w+v}),I.add({x:U-L,y:w+v})):0>=b&&g>=0?(I.add({x:Y+v,y:R+B}),I.add({x:Y+v,y:w+v}),I.add({x:U+L,y:w+v})):b>=0&&g>=0?(I.add({x:Y-v,y:R+B}),I.add({x:Y-v,y:w+v}),I.add({x:U-L,y:w+v})):(I.add({x:Y-v,y:R-B}),I.add({x:Y-v,y:w+v}),I.add({x:U+L,y:w+v})),H(I,i)}),s("ortho",function(e,k,X){var d=new z,E=e.s(t),U=e.s("edge.ortho"),v=e._40I,s=e._41I,p=V(X,e),P=p.x,W=p.y,$=S(X,e),R=$.x,B=$.y,D=R-P,u=B-W,c=E?0:Q(X,v)/2,_=E?0:G(X,v)/2,L=E?0:Q(X,s)/2,a=E?0:G(X,s)/2,O=(D-(c+L)*(D>0?1:-1))*U,K=(u-(_+a)*(u>0?1:-1))*U;return Z(D)<Z(u)?D>=0&&0>=u?(d.add({x:P+k,y:W-_}),d.add({x:P+k,y:W+K+k-_}),d.add({x:R+k,y:W+K+k-_}),d.add({x:R+k,y:B+a})):0>=D&&u>=0?(d.add({x:P+k,y:W+_}),d.add({x:P+k,y:W+K+k+_}),d.add({x:R+k,y:W+K+k+_}),d.add({x:R+k,y:B-a})):D>=0&&u>=0?(d.add({x:P+k,y:W+_}),d.add({x:P+k,y:W+K-k+_}),d.add({x:R+k,y:W+K-k+_}),d.add({x:R+k,y:B-a})):(d.add({x:P+k,y:W-_}),d.add({x:P+k,y:W+K-k-_}),d.add({x:R+k,y:W+K-k-_}),d.add({x:R+k,y:B+a})):D>=0&&0>=u?(d.add({x:P+c,y:W+k}),d.add({x:P+O+k+c,y:W+k}),d.add({x:P+O+k+c,y:B+k}),d.add({x:R-L,y:B+k})):0>=D&&u>=0?(d.add({x:P-c,y:W+k}),d.add({x:P+O+k-c,y:W+k}),d.add({x:P+O+k-c,y:B+k}),d.add({x:R+L,y:B+k})):D>=0&&u>=0?(d.add({x:P+c,y:W+k}),d.add({x:P+O-k+c,y:W+k}),d.add({x:P+O-k+c,y:B+k}),d.add({x:R-L,y:B+k})):(d.add({x:P-c,y:W+k}),d.add({x:P+O-k-c,y:W+k}),d.add({x:P+O-k-c,y:B+k}),d.add({x:R+L,y:B+k})),H(d,e)}),s("flex",function(f,B,q){var T=new z,v=f.s("edge.flex")+J(f,q),s=f.s(t),u=f._40I,n=f._41I,X=V(q,f),E=X.x,A=X.y,L=S(q,f),D=L.x,M=L.y,$=D-E,y=M-A,k=s?0:Q(q,u)/2,R=s?0:G(q,u)/2,l=s?0:Q(q,n)/2,F=s?0:G(q,n)/2,o=$>0?v:-v,P=y>0?v:-v;return Z($)<Z(y)?$>=0&&0>=y?(T.add({x:E+B,y:A-R}),T.add({x:E+B,y:A+P+B-R}),T.add({x:D+B,y:M-P+B+F}),T.add({x:D+B,y:M+F})):0>=$&&y>=0?(T.add({x:E+B,y:A+R}),T.add({x:E+B,y:A+P+B+R}),T.add({x:D+B,y:M-P+B-F}),T.add({x:D+B,y:M-F})):$>=0&&y>=0?(T.add({x:E+B,y:A+R}),T.add({x:E+B,y:A+P-B+R}),T.add({x:D+B,y:M-P-B-F}),T.add({x:D+B,y:M-F})):(T.add({x:E+B,y:A-R}),T.add({x:E+B,y:A+P-B-R}),T.add({x:D+B,y:M-P-B+F}),T.add({x:D+B,y:M+F})):$>=0&&0>=y?(T.add({x:E+k,y:A+B}),T.add({x:E+o+B+k,y:A+B}),T.add({x:D-o+B-l,y:M+B}),T.add({x:D-l,y:M+B})):0>=$&&y>=0?(T.add({x:E-k,y:A+B}),T.add({x:E+o+B-k,y:A+B}),T.add({x:D-o+B+l,y:M+B}),T.add({x:D+l,y:M+B})):$>=0&&y>=0?(T.add({x:E+k,y:A+B}),T.add({x:E+o-B+k,y:A+B}),T.add({x:D-o-B-l,y:M+B}),T.add({x:D-l,y:M+B})):(T.add({x:E-k,y:A+B}),T.add({x:E+o-B-k,y:A+B}),T.add({x:D-o-B+l,y:M+B}),T.add({x:D+l,y:M+B})),H(T,f)}),s("extend.east",function(E,M,v){var e=new z,$=E.s(C)+J(E,v),K=E.s(t),k=V(v,E),q=k.x+(K?0:Q(v,E._40I)/2),p=k.y,c=S(v,E),_=c.x+(K?0:Q(v,E._41I)/2),o=c.y,f=U(q,_)+$;return p>o?(e.add({x:q,y:p+M}),e.add({x:f+M,y:p+M}),e.add({x:f+M,y:o-M}),e.add({x:_,y:o-M})):(e.add({x:q,y:p-M}),e.add({x:f+M,y:p-M}),e.add({x:f+M,y:o+M}),e.add({x:_,y:o+M})),H(e,E)}),s("extend.west",function(x,q,O){var W=new z,r=x.s(C)+J(x,O),v=x.s(t),e=V(O,x),P=e.x-(v?0:Q(O,x._40I)/2),M=e.y,T=S(O,x),Y=T.x-(v?0:Q(O,x._41I)/2),l=T.y,u=o(P,Y)-r;return M>l?(W.add({x:P,y:M+q}),W.add({x:u-q,y:M+q}),W.add({x:u-q,y:l-q}),W.add({x:Y,y:l-q})):(W.add({x:P,y:M-q}),W.add({x:u-q,y:M-q}),W.add({x:u-q,y:l+q}),W.add({x:Y,y:l+q})),H(W,x)}),s("extend.north",function(Z,O,q){var P=new z,$=Z.s(C)+J(Z,q),m=Z.s(t),k=V(q,Z),M=k.x,E=k.y-(m?0:G(q,Z._40I)/2),Q=S(q,Z),R=Q.x,d=Q.y-(m?0:G(q,Z._41I)/2),F=o(E,d)-$;return M>R?(P.add({y:E,x:M+O}),P.add({y:F-O,x:M+O}),P.add({y:F-O,x:R-O}),P.add({y:d,x:R-O})):(P.add({y:E,x:M-O}),P.add({y:F-O,x:M-O}),P.add({y:F-O,x:R+O}),P.add({y:d,x:R+O})),H(P,Z)}),s("extend.south",function(f,b,u){var m=new z,x=f.s(C)+J(f,u),d=f.s(t),v=V(u,f),D=v.x,l=v.y+(d?0:G(u,f._40I)/2),g=S(u,f),y=g.x,B=g.y+(d?0:G(u,f._41I)/2),w=U(l,B)+x;return D>y?(m.add({y:l,x:D+b}),m.add({y:w+b,x:D+b}),m.add({y:w+b,x:y-b}),m.add({y:B,x:y-b})):(m.add({y:l,x:D-b}),m.add({y:w+b,x:D-b}),m.add({y:w+b,x:y+b}),m.add({y:B,x:y+b})),H(m,f)});var u=function(U,x,p,v,N){if(v.sort(function(B,X){var H=B.getSourceAgent()===x?B.getTargetAgent():B.getSourceAgent(),V=X.getSourceAgent()===x?X.getTargetAgent():X.getSourceAgent(),M=H.p(),v=V.p();if(p===r||p===A){if(M.y>v.y)return 1;if(M.y<v.y)return-1}else{if(M.x>v.x)return 1;if(M.x<v.x)return-1}return n.sortFunc(B.getId(),X.getId())}),N){for(var y,S,F,Q=U.getSourceAgent(),h=U.getTargetAgent(),O=0;O<v.size();O++){var q=v.get(O);q.getSourceAgent()===Q&&q.getTargetAgent()===h||q.getTargetAgent()===Q&&q.getSourceAgent()===h?(S||(S=new z),S.add(q,0)):S?(F||(F=new z),F.add(q)):(y||(y=new z),y.add(q))}v.clear(),y&&v.addAll(y),S&&v.addAll(S),F&&v.addAll(F)}var l=v.indexOf(U),o=v.size(),W=U.s(R);return{side:p,index:l,size:o,offset:-W*(o-1)/2+W*l}},e=function(f,o,C,m,$){var M=o.s(w);return u(o,C,m,C.getAgentEdges().toList(function(v){return f.isVisible(v)&&v.s(w)===M}),$)},K=function(S,i){var G=S.getSourceAgent()===i?S.getTargetAgent():S.getSourceAgent(),P=i.p(),O=G.p(),M=O.x-P.x,U=O.y-P.y;return M>0&&Z(U)<=M?A:0>M&&Z(U)<=-M?r:U>0&&Z(M)<=U?I:W},Y=function(_,v,$){var o=v.s(w),B=K(v,$);return u(v,$,B,$.getAgentEdges().toList(function(C){return _.isVisible(C)&&C.s(w)===o&&K(C,$)===B}))},_=function(E,L){var T=E.getSourceAgent()===L,w=T?E.getTargetAgent():E.getSourceAgent(),g=L.p(),s=w.p();return T?g.y>s.y?W:I:g.x<s.x?A:r},F=function(K,k,s){var X=k.s(w),f=_(k,s);return u(k,s,f,s.getAgentEdges().toList(function(y){return K.isVisible(y)&&y.s(w)===X&&_(y,s)===f}),f===A||f===I)},h=function(y,m){var V=y.getSourceAgent()===m,D=V?y.getTargetAgent():y.getSourceAgent(),n=m.p(),c=D.p();return V?n.x<c.x?A:r:n.y>c.y?W:I},E=function(U,m,N){var T=m.s(w),g=h(m,N);return u(m,N,g,N.getAgentEdges().toList(function(B){return U.isVisible(B)&&B.s(w)===T&&h(B,N)===g}),g===A||g===I)},$=function(o,N,n){var x=o.getSourceAgent(),s=o.getTargetAgent(),D=x.getId()>s.getId(),V=D?s:x,U=D?x:s,C=V.p(),R=U.p(),Y=n(N,o,V),S=n(N,o,U),v=o.s(t),g=v?0:Q(N,V)/2,E=v?0:Q(N,U)/2,B=v?0:G(N,V)/2,T=v?0:G(N,U)/2,c=Y.offset,d=S.offset,f=Y.side,J=S.side,y=new z;return f===W?(y.add({x:C.x+c,y:C.y-B}),y.add({x:C.x+c,y:R.y+d}),J===r?y.add({x:R.x-E,y:R.y+d}):y.add({x:R.x+E,y:R.y+d})):f===I?(y.add({x:C.x+c,y:C.y+B}),y.add({x:C.x+c,y:R.y+d}),J===r?y.add({x:R.x-E,y:R.y+d}):y.add({x:R.x+E,y:R.y+d})):f===r?(y.add({x:C.x-g,y:C.y+c}),y.add({x:R.x+d,y:C.y+c}),J===I?y.add({x:R.x+d,y:R.y+T}):y.add({x:R.x+d,y:R.y-T})):f===A&&(y.add({x:C.x+g,y:C.y+c}),y.add({x:R.x+d,y:C.y+c}),J===I?y.add({x:R.x+d,y:R.y+T}):y.add({x:R.x+d,y:R.y-T})),D&&y.reverse(),H(y,o)};s("ortho2",function(j,M,e){var X,S,l=j.s(t),x=j.s("edge.ortho"),d=j.getSourceAgent(),o=j.getTargetAgent(),w=d.getId()>o.getId(),C=w?o:d,V=w?d:o,p=C.p(),v=V.p(),y=Y(e,j,C),J=Y(e,j,V),K=l?0:Q(e,C)/2,P=l?0:G(e,C)/2,R=l?0:Q(e,V)/2,T=l?0:G(e,V)/2,q=new z,Z=y.offset,$=J.offset,m=y.side;return m===A?(X=v.y>p.y?-Z:Z,S=p.x+K+(v.x-R-p.x-K)*x,q.add({x:p.x+K,y:p.y+Z}),q.add({x:S+X,y:p.y+Z}),q.add({x:S+X,y:v.y+$}),q.add({x:v.x-R,y:v.y+$})):m===r?(X=v.y>p.y?-Z:Z,S=p.x-K-(p.x-K-v.x-R)*x,q.add({x:p.x-K,y:p.y+Z}),q.add({x:S-X,y:p.y+Z}),q.add({x:S-X,y:v.y+$}),q.add({x:v.x+R,y:v.y+$})):m===I?(X=v.x>p.x?-Z:Z,S=p.y+P+(v.y-T-p.y-P)*x,q.add({x:p.x+Z,y:p.y+P}),q.add({x:p.x+Z,y:S+X}),q.add({x:v.x+$,y:S+X}),q.add({x:v.x+$,y:v.y-T})):m===W&&(X=v.x>p.x?-Z:Z,S=p.y-P-(p.y-P-v.y-T)*x,q.add({x:p.x+Z,y:p.y-P}),q.add({x:p.x+Z,y:S-X}),q.add({x:v.x+$,y:S-X}),q.add({x:v.x+$,y:v.y+T})),w&&q.reverse(),H(q,j)},!0),s("flex2",function(a,T,S){var K,k=a.getSourceAgent(),f=a.getTargetAgent(),u=k.getId()>f.getId(),C=u?f:k,c=u?k:f,m=C.p(),L=c.p(),s=Y(S,a,C),_=Y(S,a,c),j=a.s(t),B=a.s("edge.flex")+(s.size-1)/2*a.s(R),$=j?0:Q(S,C)/2,y=j?0:G(S,C)/2,P=j?0:Q(S,c)/2,x=j?0:G(S,c)/2,V=new z,w=s.offset,o=_.offset,v=s.side;return v===A?(K=L.y>m.y?-w:w,V.add({x:m.x+$,y:m.y+w}),V.add({x:m.x+$+B+K,y:m.y+w}),V.add({x:L.x-P-B+K,y:L.y+o}),V.add({x:L.x-P,y:L.y+o})):v===r?(K=L.y>m.y?-w:w,V.add({x:m.x-$,y:m.y+w}),V.add({x:m.x-$-B-K,y:m.y+w}),V.add({x:L.x+P+B-K,y:L.y+o}),V.add({x:L.x+P,y:L.y+o})):v===I?(K=L.x>m.x?-w:w,V.add({x:m.x+w,y:m.y+y}),V.add({x:m.x+w,y:m.y+y+B+K}),V.add({x:L.x+o,y:L.y-x-B+K}),V.add({x:L.x+o,y:L.y-x})):v===W&&(K=L.x>m.x?-w:w,V.add({x:m.x+w,y:m.y-y}),V.add({x:m.x+w,y:m.y-y-B-K}),V.add({x:L.x+o,y:L.y+x+B-K}),V.add({x:L.x+o,y:L.y+x})),u&&V.reverse(),H(V,a)},!0),s("extend.north2",function(Q,F,L){var S=Q.getSourceAgent(),_=Q.getTargetAgent(),y=S.getId()>_.getId(),K=y?_:S,V=y?S:_,x=K.p(),g=V.p(),O=e(L,Q,K,W),n=e(L,Q,V,W,!0),h=Q.s(t),M=h?0:G(L,K)/2,b=h?0:G(L,V)/2,Y=O.offset,X=n.offset,s=Q.s(C)+(O.size-1)/2*Q.s(R),U=o(x.y-M,g.y-b)-s+(x.x<g.x?Y:-Y),J=new z;return J.add({x:x.x+Y,y:x.y-M}),J.add({x:x.x+Y,y:U}),J.add({x:g.x+X,y:U}),J.add({x:g.x+X,y:g.y-b}),y&&J.reverse(),H(J,Q)},!0),s("extend.south2",function(B,x,_){var q=B.getSourceAgent(),K=B.getTargetAgent(),F=q.getId()>K.getId(),i=F?K:q,u=F?q:K,s=i.p(),j=u.p(),p=e(_,B,i,I),Z=e(_,B,u,I,!0),Y=B.s(t),l=Y?0:G(_,i)/2,L=Y?0:G(_,u)/2,m=p.offset,k=Z.offset,Q=B.s(C)+(p.size-1)/2*B.s(R),h=U(s.y+l,j.y+L)+Q+(s.x>j.x?m:-m),N=new z;return N.add({x:s.x+m,y:s.y+l}),N.add({x:s.x+m,y:h}),N.add({x:j.x+k,y:h}),N.add({x:j.x+k,y:j.y+L}),F&&N.reverse(),H(N,B)},!0),s("extend.west2",function(Z,E,U){var a=Z.getSourceAgent(),I=Z.getTargetAgent(),S=a.getId()>I.getId(),Y=S?I:a,F=S?a:I,B=Y.p(),y=F.p(),j=e(U,Z,Y,W),c=e(U,Z,F,W,!0),l=Z.s(t),A=l?0:Q(U,Y)/2,T=l?0:Q(U,F)/2,n=j.offset,P=c.offset,$=Z.s(C)+(j.size-1)/2*Z.s(R),u=o(B.x-A,y.x-T)-$+(B.y<y.y?n:-n),p=new z;return p.add({x:B.x-A,y:B.y+n}),p.add({x:u,y:B.y+n}),p.add({x:u,y:y.y+P}),p.add({x:y.x-T,y:y.y+P}),S&&p.reverse(),H(p,Z)},!0),s("extend.east2",function(p,T,I){var B=p.getSourceAgent(),i=p.getTargetAgent(),w=B.getId()>i.getId(),L=w?i:B,b=w?B:i,c=L.p(),P=b.p(),Y=e(I,p,L,W),h=e(I,p,b,W,!0),v=p.s(t),d=v?0:Q(I,L)/2,A=v?0:Q(I,b)/2,j=Y.offset,M=h.offset,J=p.s(C)+(Y.size-1)/2*p.s(R),q=U(c.x+d,P.x+A)+J+(c.y>P.y?j:-j),r=new z;return r.add({x:c.x+d,y:c.y+j}),r.add({x:q,y:c.y+j}),r.add({x:q,y:P.y+M}),r.add({x:P.x+A,y:P.y+M}),w&&r.reverse(),H(r,p)},!0),s("v.h2",function(u,G,z){return $(u,z,F)},!0),s("h.v2",function(r,b,t){return $(r,t,E)},!0)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:this,Object);