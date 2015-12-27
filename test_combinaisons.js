	var mot = [];
	var mots = [];
	var str = "";
	var combinaisonsCaches = {};

	var getOmbre = function(word){
		convert();
		mot = [];
		mots = []
		str = "";
		var motInit = word.length;
		getOmbre2(word, motInit);
	}

	var getOmbre2 = function(word, size){
		var i = word.length;
		if(word !== ""){
			var lettre = word[0];
			getCombinaisons(lettre).forEach(function(x){
				mot.push(x);
				getOmbre2(word.substring(1), size);
				if(mot.length === size)
					mots.push(mot.slice());
				mot.pop();
			});
		} else
			return "";
	}

	var combinaisons = {
		"a" : {
				'maj' : ['A','F','FI','H','K','I','N'],
				'min' : ['a','c','ci','i','n','o','r','ri','u']
			},
		"b" : {
				'maj'  : ['A','B','C','CI','D','E','EI','F','FI','G','H','I','J','K','L','N','O','P','R','S','U','X'],
				'min'  : ['b','c','ci','i','l','li','n','o','r','ri','t','ti','u']
			}
		"c" : {
				''
			}/*,
		"b" : 
		"c" : ['C','I','L'],
		"d" : ['C,CI,D,I,IJ,J,L,LI,N,O,U'],
		"e" : ['C,E,F,I,L'],
		"f" : [F,I],
		"g"	: [C,F,G,I,L],
		"h" : [H,K,I],
		"i" : [I],
		"j" : [J],

		"o" : ['u', 'p', 's']*/
	}
		/*
K:I,H,K,X
L:I,L
M:I,IN,M,N,NI,ITI,V,Y
N:I,N,V
O:C,CI,D,I,IJ,J,L,LI,N,O,U
P:F,I,P
Q:C,CI,D,I,IJ,J,L,LI,O,Q,U
R:A,F,FI,H,I,K,N,P,R,X
S:S
T:I,T
U:I,J,IJ,L,LI,U
V:I,V
W:I,IJ,JI,IJI,IL,ILI,IU,L,LI,LJI,LLI,LU,UI,IV,N,U,V,VI,W
X:X,Y
Y:Y
Z:Z


a:a,c,ci,i,n,o,r,ri,u
b:b,c,ci,i,l,li,n,o,r,ri,t,ti,u
c:c,i,r
d:a,c,ci,d,i,il,l,n,o,r,ri,rl,u
e:c,e,i,r
f:f,i,l,t,r
g:a,c,ci,g,i,j,n,o,r,ri,u,y
h:h,i,l,li,n,r,ri,t,ti
i:i
j:i,j
k:h,i,k,l,li,n,r,ri,t,ti,x
l:i,l
m:i,in,ir,iri,irr,m,ni,ri,rn,rr,rri,y
n:i,n,r,ri,v
o:c,i,n,o,r,ri,u
p:c,ci,i,n,o,p,r,ri,u
q:a,c,ci,i,n,o,q,r,ri,u,y
r:i,r
s:s
t:c,i,l,t,r
u:i,u
v:i,v
w:iv,w,v,vi
x:x,y
y:i,u,y
z:z
*/
	var convert = function(){
		k = Object.keys(combinaisons);
		k.forEach(function(x){
			var temp = [];
			for(j = 0; j<combinaisons[x].min.length;j++){
				temp.push(new letter(combinaisons[x].min[j],'min'));
			}
			for(j = 0; j<combinaisons[x].maj.length;j++){
				temp.push(new letter(combinaisons[x].maj[j],'maj'));
			}
			combinaisonsCaches[x] = temp;
		});
	}

	var letter = function(value,police){
		this.value = value;
		if(police == 'min')
			this.police = 'OMBREMINCACHE';
		else 
			this.police = 'OMBREMAJCACHE';
	}

	var getCombinaisons = function(letter){
		var e = Object.keys(combinaisonsCaches);
		for(i = 0; i<e.length;i++){
			if(letter === e[i])
				return combinaisonsCaches[e[i]];
		}
	}
