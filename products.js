// products.js — Product database for the static EKRAM ORIGINAL site
const productsData = {
    indrani: {
        id: 'indrani',
        name: 'Indrani Kurti',
        category: 'Kurti & Tops',
        price: 1299,
        badge: 'Featured',
        badgeClass: 'badge-featured',
        description: 'A beautiful traditional Kurti with modern multicolour prints, perfect for any casual or festive occasion.',
        colors: [
            { name: 'Multicolour', hex: '#C19A6B' },
            { name: 'Blue', hex: '#4169E1' }
        ],
        images: [
            'img/INDRANI (MULTICOLOUR)1.webp',
            'img/INDRANI (MULTICOLOUR)2.webp',
            'img/INDRANI (MULTICOLOUR)3.webp',
            'img/INDRANI (BLUE)1.webp',
            'img/INDRANI (BLUE)2.webp',
            'img/INDRANI (BLUE)3.webp',
            'img/INDRANI (BLUE)4.webp',
            'img/INDRANI (LILAC)1.webp',
            'img/INDRANI (LILAC)2.webp',
            'img/INDRANI (LILAC)3.webp',
            'img/INDRANI (WHITE AND BLACK)1.webp',
            'img/INDRANI (WHITE AND BLACK)2.webp',
            'img/INDRANI (WHITE AND BLACK)3.webp',
            'img/INDRANI (GREY AND WHITE)1.webp',
            'img/INDRANI (GREY AND WHITE)2.webp',
            'img/INDRANI (GREY AND WHITE)3.webp'
        ]
    },
    jividha: {
        id: 'jividha',
        name: 'Jividha Co-Ord Set',
        category: 'Co-Ord Sets',
        price: 2199,
        badge: null,
        description: 'Comfortable and stylish co-ord set in beautiful pastel shades, bringing elegance to your everyday look.',
        colors: [
            { name: 'Bubblegum Pink', hex: '#FFC0CB' }
        ],
        images: [
            'img/JIVIDA (BUBLEGUM-PINK)1.webp',
            'img/JIVIDA (BUBLEGUM-PINK)2.webp',
            'img/JIVIDA (NEON LIME GREEN)1.webp',
            'img/JIVIDA (NEON LIME GREEN)2.webp',
            'img/JIVIDA (NEON LIME GREEN)3.webp',
            'img/JIVIDA (SKY BLUE)1.webp',
            'img/JIVIDA (SKY BLUE)2.webp'
        ]
    },
    vikroti: {
        id: 'vikroti',
        name: 'Vikroti Boho Pants',
        category: 'Boho Pants',
        price: 1599,
        badge: 'New',
        badgeClass: 'badge-new',
        description: 'Flowy, comfortable boho pants designed to give you freedom of movement without compromising on style.',
        colors: [
            { name: 'Navy Blue', hex: '#000080' },
            { name: 'Black', hex: '#000000' }
        ],
        images: [
            'img/VIKROTI- NAVY BLUE 1.webp',
            'img/VIKROTI- NAVY BLUE 2.webp',
            'img/VIKROTI- NAVY BLUE 3.webp',
            'img/VIKROTI- NAVY BLUE 4.webp',
            'img/VIKROTI- BLACK 1.webp',
            'img/VIKROTI- BLACK 2.webp',
            'img/VIKROTI- BLACK 3.webp',
            'img/VIKROTI- BLUE 1.webp',
            'img/VIKROTI- BLUE 2.webp',
            'img/VIKROTI- BLUE 3.webp',
            'img/VIKROTI- BLUE 4.webp'
        ]
    },
    laavanya: {
        id: 'laavanya',
        name: 'Laavanya Kurti',
        category: 'Kurti & Tops',
        price: 1899,
        badge: null,
        description: 'Exquisite kurti that pairs perfectly with boho pants or classic jeans, made from breathable organic cotton.',
        colors: [
            { name: 'Pink', hex: '#FFC0CB' }
        ],
        images: [
            'img/LAAVANYA (PINK)1.webp',
            'img/LAAVANYA (PINK)2.webp',
            'img/LAAVANYA (PINK)3.webp',
            'img/LAAVANYA (PINK)4.webp',
            'img/LAAVANYA (PEACH)1.webp',
            'img/LAAVANYA (PEACH)2.webp',
            'img/LAAVANYA (PEACH)3.webp',
            'img/LAAVANYA (BLACK AND RED)1.webp',
            'img/LAAVANYA (BLACK AND RED)2.webp',
            'img/LAAVANYA (BLACK AND BLUE)1.webp',
            'img/LAAVANYA (BLACK AND BLUE)2.webp',
            'img/LAAVANYA (BLACK AND BLUE)3.webp',
            'img/LAAVANYA (BLACK AND WHITE DRAGON PRINT)1.webp',
            'img/LAAVANYA (BLACK AND WHITE DRAGON PRINT)2.webp',
            'img/LAAVANYA (BLACK AND WHITE DRAGON PRINT)3.webp'
        ]
    }
};

window.productsData = productsData;
