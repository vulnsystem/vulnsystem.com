(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{619:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return s})),i.d(t,"toc",(function(){return o})),i.d(t,"default",(function(){return h}));var a=i(4),r=i(10),n=(i(0),i(710)),c={id:"asymmetric-cryptography",title:"Asymmetric Cryptography",description:"Overview of asymmetric cryptography"},s={unversionedId:"asymmetric-cryptography",id:"asymmetric-cryptography",isDocsHomePage:!1,title:"Asymmetric Cryptography",description:"Overview of asymmetric cryptography",source:"@site/../docs/asymmetric-cryptography.md",slug:"/asymmetric-cryptography",permalink:"/docs/next/asymmetric-cryptography",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/asymmetric-cryptography.md",version:"current",lastUpdatedAt:1621076140,formattedLastUpdatedAt:"5/15/2021",sidebar:"docs",previous:{title:"Symmetric Cryptography",permalink:"/docs/next/symmetric-cryptography"},next:{title:"TLS Handshake",permalink:"/docs/next/tls-handshake"}},o=[{value:"Asymmetric Encryption",id:"asymmetric-encryption",children:[]},{value:"Public key sharing",id:"public-key-sharing",children:[]},{value:"Man-in-the-middle swaps the key",id:"man-in-the-middle-swaps-the-key",children:[]},{value:"Digital certificate",id:"digital-certificate",children:[{value:"Certificate signing",id:"certificate-signing",children:[]},{value:"Certificate sharing",id:"certificate-sharing",children:[]}]},{value:"Certificate Authority - A chain of trust",id:"certificate-authority---a-chain-of-trust",children:[]},{value:"Digital signature",id:"digital-signature",children:[]},{value:"Elliptic-Curve Cryptography",id:"elliptic-curve-cryptography",children:[]}],l={toc:o};function h(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Copyright: the following content is totally copy from the ",Object(n.b)("a",{parentName:"p",href:"https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd"},"TECHSCHOOL"),".")),Object(n.b)("p",null,"Now let\u2019s get back to asymmetric cryptography! It\u2019s an awesome technology that has a wide range of applications."),Object(n.b)("p",null,Object(n.b)("img",{alt:"asymmetric-overview",src:i(886).default}),"\nWe\u2019ve already explored 1 of its application, which is for symmetric secret key exchange, with Diffie-Hellman Ephemeral and Elliptic-Curve Diffie-Hellman Ephemeral.\nIn fact, RSA algorithm was also used for key exchange in the past, but it has been removed in TLS 1.3 due to various attacks and no forward-secrecy capability.\nAsymmetric cryptography is also used in encryption system. Here are asymmetric encryption algorithms:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"RSA with optimal asymmetric encryption padding (RSA-OAEP)."),Object(n.b)("li",{parentName:"ul"},"RSA with public key cryptography standard 1 (RSA-PKCS1) with the latest version 2.2"),Object(n.b)("li",{parentName:"ul"},"Elgamal Encryption algorithm.\nAnd finally, another important feature of asymmetric cryptography is for digital signature, which TLS uses extensively for authentication.\nSome popular digital signature algorithms used in TLS are:"),Object(n.b)("li",{parentName:"ul"},"RSA with Probabilitic Signature Scheme."),Object(n.b)("li",{parentName:"ul"},"Elliptic-Curve Digital Signature Algorithm."),Object(n.b)("li",{parentName:"ul"},"Edwards-Curve Digital Signature Algorithm.\nWe will learn about digital signature shortly. But before that, let\u2019s learn how asymmetric encryption system works.")),Object(n.b)("h2",{id:"asymmetric-encryption"},"Asymmetric Encryption"),Object(n.b)("p",null,Object(n.b)("img",{alt:"asymmetric-encryption",src:i(887).default}),"\nSimilar as in symmetric encryption, Alice has a plaintext message that she wants to send to Bob.\nBut this time, there\u2019s no shared secret key. Instead, Alice encrypt the message with Bob\u2019s public key, and send the encrypted message to Bob.\nWhen Bob receives the message, he uses his private key to decrypt it.\nAlthough the public key and private key are different, they are still connected by some trapdoor function, just like what we\u2019ve seen in the Diffie-Hellman algorithm.\nThe idea is: keys come in pair, and only the private key of the same pair can decrypt the message encrypted with its public key.\nBecause of this, even when Harry the hacker has access to both Alice\u2019s encrypted message and Bob\u2019s public key, he cannot use that public key to decrypt the message."),Object(n.b)("h2",{id:"public-key-sharing"},"Public key sharing"),Object(n.b)("p",null,Object(n.b)("img",{alt:"pubkey-sharing",src:i(888).default}),"\nThe public key sharing is very simple. Bob just send the key to Alice directly over the public internet without the fear that the key can be used to decrypt any messages.\nThe key is public, so anyone can use it to encrypt messages that only Bob can read, even if they have never talked to each other before. It\u2019s really mind-blowing, isn\u2019t it?\nHowever, life\u2019s not that so easy!"),Object(n.b)("h2",{id:"man-in-the-middle-swaps-the-key"},"Man-in-the-middle swaps the key"),Object(n.b)("p",null,Object(n.b)("img",{alt:"key-swap",src:i(889).default}),"\nAlthough we know that Harry cannot decrypt the message with Bob\u2019s public key, he can still interfere with the public key sharing, and replace Bob\u2019s public key with his own public key.\nNow when Alice receive the key, she still thinks it\u2019s Bob\u2019s public key, but it\u2019s in fact Harry\u2019s. So if Alice encrypts her message with this key, Harry would be able to decrypt it with his private key.\nThe reason this can happen is because a key is simply just a number, and there\u2019s no identity information to tell us who its owner is.\nSo what can we do? Obviously, we should put the key together with some identity information. And that\u2019s nothing else but a digital certificate."),Object(n.b)("h2",{id:"digital-certificate"},"Digital certificate"),Object(n.b)("p",null,Object(n.b)("img",{alt:"digital-certificate",src:i(890).default}),"\nSo Bob puts his key inside his certificate, which has his name and other identity information on it. The certificate acts like a passport in the real world.\nBut how do we know it\u2019s really Bob who owns that certificate? What stops Harry from making a fake certificate under Bob\u2019s name but with Harry\u2019s public key?\nWell, just like in the real world, the passport must be issued by a passport authority after a process of identity verification. In digital world, the certificate must be verified and signed by a certificate authority.\nThis certificate authority and passport authority are trusted third party, who helps us prevent creation of fake passport and digital certificates."),Object(n.b)("h3",{id:"certificate-signing"},"Certificate signing"),Object(n.b)("p",null,Object(n.b)("img",{alt:"certificate-signing",src:i(891).default}),"\nThe certificate signing process happens like this:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Bob has a pair of public and private key."),Object(n.b)("li",{parentName:"ol"},"In the first step, he creates a certificate signing request, or CSR. This CSR contains his public key and some identity information, such as his name, organization, and email."),Object(n.b)("li",{parentName:"ol"},"Then the second step, he signs the CSR with his private key, and sends it to the certificate authority."),Object(n.b)("li",{parentName:"ol"},"The certificate authority will verify Bob\u2019s identity in the certificate. They can contact him to ask for more proof if necessary."),Object(n.b)("li",{parentName:"ol"},"Then they use Bob\u2019s public key in the certificate to verify his signature. This is to make sure that Bob really owns the private key that paired with the public key in the certificate."),Object(n.b)("li",{parentName:"ol"},"If everything is valid, the CA will sign the certificate with their own private key, and send it back to Bob.")),Object(n.b)("h3",{id:"certificate-sharing"},"Certificate sharing"),Object(n.b)("p",null,Object(n.b)("img",{alt:"certificate-sharing",src:i(892).default}),"\nNow Bob will share with Alice this certificate, which contains his public key, instead of sending just the public key as before.\nUpon receiving the certificate, Alice can easily verify its authenticity with the public key of the Certificate authority.\nBecause of this, Harry cannot replace Bob\u2019s public key with his key anymore, since he doesn\u2019t have the CA\u2019s private key to sign the fake certificate.\nNote that this only works because we all trust the Certificate Authority. If somehow the CA is not trustworthy, for example, if they give Harry their private key, then we\u2019re in a serious trouble!"),Object(n.b)("h2",{id:"certificate-authority---a-chain-of-trust"},"Certificate Authority - A chain of trust"),Object(n.b)("p",null,"In reality, there\u2019s a chain of certificate authorities.\n",Object(n.b)("img",{alt:"certificate-authority",src:i(893).default}),"\nAt the top level is a root certificate authority, who signs their own certificate, and also signs the certificate of their subordinate, which is an intermediate certificate authority.\nThis authority can sign the certificate of other intermediate authorities, or they can sign the end-entity certificate (or leaf certificate).\nEach certificate will reference back to the certificate of their higher level authority, up to the root.\nYour operating systems and browsers store a list of certificates of trusted root certificate authorities. That way they can easily verify the authenticity of all certificates."),Object(n.b)("h2",{id:"digital-signature"},"Digital signature"),Object(n.b)("p",null,"We\u2019ve talked a lot about signing a digital signature, so let\u2019s see how it really works!\n",Object(n.b)("img",{alt:"digital-signature",src:i(894).default}),"\nTo sign a document:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"The signer first need to hash it."),Object(n.b)("li",{parentName:"ol"},"Then the hash value is encrypted using the signer\u2019s private key."),Object(n.b)("li",{parentName:"ol"},"The result will be the digital signature."),Object(n.b)("li",{parentName:"ol"},"Then this signature will be attached to the original document.\nAnd that\u2019s it for the signing process. Now how can we verify that the signature is valid?")),Object(n.b)("p",null,Object(n.b)("img",{alt:"verify-signature",src:i(895).default}),"\nWell, we just do a reversed process:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"First we detach the signature from the document"),Object(n.b)("li",{parentName:"ol"},"Decrypt it with the signer\u2019s public key to get a hash value."),Object(n.b)("li",{parentName:"ol"},"Then we hash the document with the same hash algorithm used in the signing process."),Object(n.b)("li",{parentName:"ol"},"The result is another hash value."),Object(n.b)("li",{parentName:"ol"},"Then we just compare the 2 hash values."),Object(n.b)("li",{parentName:"ol"},"If they\u2019re the same then the signature is valid.")),Object(n.b)("h2",{id:"elliptic-curve-cryptography"},"Elliptic-Curve Cryptography"),Object(n.b)("p",null,Object(n.b)("img",{alt:"elliptic-curve",src:i(815).default}),"\nElliptic-curve cryptography (or ECC) is an approach to asymmetric cryptography, where the algorithm is similar, but a different trapdoor function is used.\nThat trapdoor function is based on the algebraic structure of elliptic curves. And that\u2019s why the name.\nOne amazing value of elliptic curve cryptography is: it requires smaller keys to provide the equivalent security level. You can see it in this comparison with RSA.\nThe U.S. National Security Agency (NSA) used to protect their top secret with ECC 384-bits key, which provides the same security level with a RSA-7680 bit key.\n",Object(n.b)("strong",{parentName:"p"},"Sounds amazing, right?"),"\nHowever, Elliptic curve cryptography is an easier target for quantum-computing attack. Shor\u2019s algorithm can break ECC on a hypothetical quantum computer with less amount of quantum resources than to break RSA.\nThere might be decades before that strong quantum computer actually be built and used. But have we prepared anything for that yet? Is there any quantum-resistant algorithm?\nYes, there is Supersingular Isogeny Diffie-Hellman key exchange algorithm, which is also based on the Elliptic Curve Cryptography."))}h.isMDXComponent=!0},710:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return b}));var a=i(0),r=i.n(a);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=r.a.createContext({}),h=function(e){var t=r.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=h(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=r.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=h(i),y=a,b=u["".concat(c,".").concat(y)]||u[y]||p[y]||n;return i?r.a.createElement(b,s(s({ref:t},l),{},{components:i})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,c=new Array(n);c[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<n;l++)c[l]=i[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,i)}y.displayName="MDXCreateElement"},815:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/elliptic-curve-0d9de7e1b8ff7a1adc62cc432a4427b8.png"},886:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/asymmetric-overview-4b4225f21c160ad9a57edd113e730068.png"},887:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/asymmetric-encryption-86beeca3c632e0eb5fa70a33c0e07f0a.png"},888:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/pubkey-sharing-0ce2f61a7dcddd1128238a2c5e9a0f37.png"},889:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/key-swap-1bb633b53b0897a3e6f24e92206a3187.png"},890:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/digital-certificate-3f8d95984cfe64cdc568c4a6624f18d4.png"},891:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/certificate-signing-64bf09d40be3315fd7b79c58be37578f.png"},892:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/certificate-sharing-f12f2ca7e54c9c4cc41b28ca56bf6697.png"},893:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/certificate-authority-37d0a08c26ac9af3fd608c5dfbe5adf2.png"},894:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/digital-signature-eeb4196dc3b666b1b9316cc2e1977751.png"},895:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/verify-signature-0ab603f282999656b87d40fcf7066826.png"}}]);