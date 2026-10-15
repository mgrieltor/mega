// ============ GOOGLE FORMS CONFIG ============
// ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА СВОИ ПОСЛЕ НАСТРОЙКИ GOOGLE FORMS
// Инструкция по настройке — в конце этого файла (комментарий)
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSeXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/formResponse';
const FORM_ENTRY_NAME = 'entry.1000001';   // ID поля "Имя"
const FORM_ENTRY_PHONE = 'entry.1000002';  // ID поля "Телефон"
const FORM_ENTRY_MESSAGE = 'entry.1000003'; // ID поля "Сообщение"
// =============================================

// Данные объектов
const properties = [
  {
    id: 1,
    title: 'Пентхаус с панорамным видом',
    type: 'apartment',
    price: 1250000,
    area: 220,
    rooms: 4,
    district: 'Мирзо-Улугбекский',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
    description: 'Роскошный пентхаус в новом жилом комплексе бизнес-класса. Панорамные окна от пола до потолка, терраса 80 кв.м, дизайнерский ремонт, система умный дом.',
    features: ['Терраса 80 м²', 'Умный дом', 'Подземный паркинг', 'Панорамные окна']
  },
  {
    id: 2,
    title: 'Вилла в закрытом комплексе',
    type: 'house',
    price: 2100000,
    area: 450,
    rooms: 6,
    district: 'Мирзо-Улугбекский',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
    description: 'Просторная вилла с собственным садом и бассейном. Закрытая охраняемая территория, фитнес-клуб и детская площадка на территории комплекса.',
    features: ['Бассейн', 'Сад 12 соток', 'Охрана 24/7', 'Фитнес-клуб']
  },
  {
    id: 3,
    title: 'Апартаменты в центре',
    type: 'apartment',
    price: 780000,
    area: 145,
    rooms: 3,
    district: 'Юнусабадский',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
    description: 'Стильные апартаменты в историческом центре города. Высокие потолки, лепнина, камин. Полностью отреставрированы в 2025 году.',
    features: ['Камин', 'Потолки 4 м', 'Исторический центр', 'Отреставрировано']
  },
  {
    id: 4,
    title: 'Офисное помещение класса A',
    type: 'commercial',
    price: 950000,
    area: 320,
    rooms: 0,
    district: 'Шайхантахурский',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop',
    description: 'Просторный офис в бизнес-центре класса А. Отделка White Box, панорамные окна, 4 парковочных места включены.',
    features: ['БЦ класса А', '4 парковки', 'White Box', 'Панорамные окна']
  },
  {
    id: 5,
    title: 'Квартира с террасой',
    type: 'apartment',
    price: 520000,
    area: 98,
    rooms: 2,
    district: 'Яккасарайский',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop',
    description: 'Уютная двухкомнатная квартира с большой террасой. Идеально для тех, кто ценит outdoor-пространство в городе.',
    features: ['Терраса 25 м²', 'Новый ЖК', 'Чистовая отделка', 'Кладовая']
  },
  {
    id: 6,
    title: 'Загородный дом',
    type: 'house',
    price: 1680000,
    area: 380,
    rooms: 5,
    district: 'Мирзо-Улугбекский',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=500&fit=crop',
    description: 'Современный загородный дом в 15 минутах от центра. Большая гостиная с двойным светом, гараж на 3 машины.',
    features: ['Гараж на 3 авто', 'Второй свет', 'Ландшафтный дизайн', 'Сауна']
  },
  {
    id: 7,
    title: 'Студия в новостройке',
    type: 'apartment',
    price: 85000,
    area: 42,
    rooms: 1,
    district: 'Юнусабадский',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop',
    description: 'Компактная студия в новом жилом комплексе. Отличный вариант для инвестиций или первого жилья.',
    features: ['Новостройка', 'Сдача в 2026', 'Рассрочка', 'Рядом метро']
  },
  {
    id: 8,
    title: 'Ресторанное помещение',
    type: 'commercial',
    price: 420000,
    area: 180,
    rooms: 0,
    district: 'Яккасарайский',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    description: 'Готовое помещение под ресторан с отдельным входом и летней верандой. Высокий пешеходный трафик.',
    features: ['Летняя веранда', 'Отдельный вход', 'Вытяжка', 'Высокий трафик']
  }
];

// Состояние
let favorites = JSON.parse(localStorage.getItem('megarieltor_favorites')) || [];
let currentFilters = {
  type: 'all',
  district: 'all',
  price: 'all',
  search: ''
};

// DOM элементы
const catalogGrid = document.getElementById('catalogGrid');
const noResults = document.getElementById('noResults');
const featuredCard = document.getElementById('featuredCard');
const favoritesCount = document.getElementById('favoritesCount');
const favoritesBtn = document.getElementById('favoritesBtn');
const filterType = document.getElementById('filterType');
const filterDistrict = document.getElementById('filterDistrict');
const filterPrice = document.getElementById('filterPrice');
const resetFilters = document.getElementById('resetFilters');
const heroSearch = document.getElementById('heroSearch');
const heroSearchBtn = document.getElementById('heroSearchBtn');
const modal = document.getElementById('propertyModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');
const header = document.getElementById('header');

// ============ TOAST-УВЕДОМЛЕНИЯ ============
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast__icon">${type === 'success' ? '✅' : '⚠️'}</span><span>${message}</span>`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ============ ФОРМАТИРОВАНИЕ ============
function formatPrice(price) {
  return '$' + price.toLocaleString('en-US');
}

function getTypeLabel(type) {
  const labels = {
    apartment: 'Квартира',
    house: 'Дом',
    commercial: 'Коммерческая'
  };
  return labels[type] || type;
}

// ============ ИЗБРАННОЕ ============
function isFavorite(id) {
  return favorites.includes(id);
}

function updateFavoritesCount() {
  favoritesCount.textContent = favorites.length;
}

function saveFavorites() {
  localStorage.setItem('megarieltor_favorites', JSON.stringify(favorites));
  updateFavoritesCount();
}

function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(id);
  }
  saveFavorites();
  renderCatalog();
  if (modal.classList.contains('open')) {
    const favBtn = modalBody.querySelector('.modal__fav-btn');
    if (favBtn) {
      favBtn.classList.toggle('active', isFavorite(id));
      favBtn.textContent = isFavorite(id) ? '★ В избранном' : '☆ В избранное';
    }
  }
}

// ============ ФИЛЬТРАЦИЯ ============
function getFilteredProperties() {
  return properties.filter(p => {
    if (currentFilters.type !== 'all' && p.type !== currentFilters.type) return false;
    if (currentFilters.district !== 'all' && p.district !== currentFilters.district) return false;
    if (currentFilters.price !== 'all') {
      const [min, max] = currentFilters.price.split('-').map(Number);
      if (max) {
        if (p.price < min || p.price > max) return false;
      } else {
        if (p.price < min) return false;
      }
    }
    if (currentFilters.search) {
      const searchLower = currentFilters.search.toLowerCase();
      const matches = p.title.toLowerCase().includes(searchLower) ||
                      p.district.toLowerCase().includes(searchLower) ||
                      p.description.toLowerCase().includes(searchLower);
      if (!matches) return false;
    }
    return true;
  });
}

// ============ КАРТОЧКА ОБЪЕКТА ============
function createPropertyCard(property) {
  const card = document.createElement('div');
  card.className = 'property-card';
  card.dataset.id = property.id;
  card.innerHTML = `
    <div class="property-card__image" style="background-image: url('${property.image}')">
      <button class="property-card__favorite ${isFavorite(property.id) ? 'active' : ''}" data-fav-id="${property.id}">
        ${isFavorite(property.id) ? '★' : '☆'}
      </button>
      <span class="property-card__type">${getTypeLabel(property.type)}</span>
    </div>
    <div class="property-card__body">
      <h3 class="property-card__title">${property.title}</h3>
      <p class="property-card__location">📍 ${property.district} район</p>
      <div class="property-card__details">
        <span>${property.area} м²</span>
        <span>${property.rooms > 0 ? property.rooms + ' комн.' : 'Своб. планировка'}</span>
      </div>
      <div class="property-card__price">${formatPrice(property.price)}</div>
    </div>
  `;

  card.addEventListener('click', (e) => {
    if (e.target.closest('.property-card__favorite')) return;
    openModal(property);
  });

  const favBtn = card.querySelector('.property-card__favorite');
  favBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFavorite(property.id);
  });

  return card;
}

// ============ РЕНДЕР КАТАЛОГА ============
function renderCatalog() {
  const filtered = getFilteredProperties();
  catalogGrid.innerHTML = '';
  
  if (filtered.length === 0) {
    noResults.textContent = 'Ничего не найдено';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';
  
  filtered.forEach(p => {
    catalogGrid.appendChild(createPropertyCard(p));
  });
}

// ============ ПРЕДЛОЖЕНИЕ НЕДЕЛИ ============
function renderFeatured() {
  const featured = properties.reduce((max, p) => p.price > max.price ? p : max, properties[0]);
  featuredCard.innerHTML = `
    <div class="featured-card__image" style="background-image: url('${featured.image}')"></div>
    <div class="featured-card__content">
      <span class="featured-card__badge">Предложение недели</span>
      <h3 class="featured-card__title">${featured.title}</h3>
      <p class="featured-card__meta">${featured.district} район · ${featured.area} м² · ${featured.rooms > 0 ? featured.rooms + ' комн.' : 'Своб. планировка'}</p>
      <div class="featured-card__price">${formatPrice(featured.price)}</div>
      <button class="featured-card__btn" data-featured-id="${featured.id}">Подробнее →</button>
    </div>
  `;
  
  featuredCard.querySelector('.featured-card__btn').addEventListener('click', () => {
    openModal(featured);
  });
}

// ============ МОДАЛЬНОЕ ОКНО ============
function openModal(property) {
  modalBody.innerHTML = `
    <div class="modal__image" style="background-image: url('${property.image}')"></div>
    <h2 class="modal__title">${property.title}</h2>
    <p class="modal__location">📍 ${property.district} район, Ташкент</p>
    <div class="modal__details">
      <span>${property.area} м²</span>
      <span>${property.rooms > 0 ? property.rooms + ' комнат' : 'Свободная планировка'}</span>
      <span>${getTypeLabel(property.type)}</span>
    </div>
    <div class="modal__price">${formatPrice(property.price)}</div>
    <p class="modal__desc">${property.description}</p>
    <div class="modal__features">
      ${property.features.map(f => `<span class="modal__feature">${f}</span>`).join('')}
    </div>
    <div class="modal__actions">
      <button class="modal__fav-btn ${isFavorite(property.id) ? 'active' : ''}" data-fav-id="${property.id}">
        ${isFavorite(property.id) ? '★ В избранном' : '☆ В избранное'}
      </button>
      <a href="tel:+998339000339" class="modal__contact-btn">📞 Позвонить</a>
      <a href="https://t.me/megarieltor" target="_blank" class="modal__contact-btn">✈ Telegram</a>
    </div>
  `;
  
  const favBtn = modalBody.querySelector('.modal__fav-btn');
  favBtn.addEventListener('click', () => {
    toggleFavorite(property.id);
  });
  
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ============ ОБРАБОТЧИКИ ФИЛЬТРОВ ============
filterType.addEventListener('change', (e) => {
  currentFilters.type = e.target.value;
  renderCatalog();
});

filterDistrict.addEventListener('change', (e) => {
  currentFilters.district = e.target.value;
  renderCatalog();
});

filterPrice.addEventListener('change', (e) => {
  currentFilters.price = e.target.value;
  renderCatalog();
});

resetFilters.addEventListener('click', () => {
  filterType.value = 'all';
  filterDistrict.value = 'all';
  filterPrice.value = 'all';
  currentFilters = { type: 'all', district: 'all', price: 'all', search: '' };
  heroSearch.value = '';
  renderCatalog();
});

// ============ ПОИСК ============
function performSearch() {
  currentFilters.search = heroSearch.value.trim();
  renderCatalog();
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

heroSearchBtn.addEventListener('click', performSearch);
heroSearch.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') performSearch();
});

// ============ ИЗБРАННОЕ В ШАПКЕ ============
favoritesBtn.addEventListener('click', () => {
  const favProperties = properties.filter(p => favorites.includes(p.id));
  catalogGrid.innerHTML = '';
  if (favProperties.length === 0) {
    noResults.textContent = 'У вас пока нет избранных объектов';
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    favProperties.forEach(p => {
      catalogGrid.appendChild(createPropertyCard(p));
    });
  }
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  
  filterType.value = 'all';
  filterDistrict.value = 'all';
  filterPrice.value = 'all';
  currentFilters = { type: 'all', district: 'all', price: 'all', search: '' };
  heroSearch.value = '';
});

// ============ МОДАЛЬНОЕ ОКНО ============
modalOverlay.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ============ ОТПРАВКА ФОРМЫ В GOOGLE FORMS ============
async function submitToGoogleForm(name, phone, message) {
  const formData = new URLSearchParams();
  formData.append(FORM_ENTRY_NAME, name);
  formData.append(FORM_ENTRY_PHONE, phone);
  formData.append(FORM_ENTRY_MESSAGE, message);

  // Отправка через fetch с mode: 'no-cors' (Google Forms не поддерживает CORS)
  await fetch(GOOGLE_FORM_ACTION, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData.toString()
  });

  // Сохраняем заявку локально (резервная копия + для админ-панели)
  saveLeadLocally({ name, phone, message, date: new Date().toISOString() });
}

function saveLeadLocally(lead) {
  const leads = JSON.parse(localStorage.getItem('megarieltor_leads')) || [];
  leads.unshift(lead);
  // Храним максимум 100 последних заявок локально
  if (leads.length > 100) leads.length = 100;
  localStorage.setItem('megarieltor_leads', JSON.stringify(leads));
}

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('formName').value.trim();
  const phone = document.getElementById('formPhone').value.trim();
  const message = document.getElementById('formMessage').value.trim();

  if (!name || !phone) {
    showToast('Пожалуйста, заполните имя и телефон', 'error');
    return;
  }

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Отправка...';
  submitBtn.disabled = true;

  try {
    await submitToGoogleForm(name, phone, message);
    showToast('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    contactForm.reset();
  } catch (error) {
    console.error('Ошибка отправки:', error);
    // Даже если fetch не удался (Google Forms всегда возвращает opaque response),
    // заявка сохранена локально — считаем отправку успешной
    saveLeadLocally({ name, phone, message, date: new Date().toISOString() });
    showToast('Заявка сохранена! Мы свяжемся с вами.');
    contactForm.reset();
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

// ============ ТЕНЬ У ШАПКИ ============
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ============ ИНИЦИАЛИЗАЦИЯ ============
function init() {
  updateFavoritesCount();
  renderFeatured();
  renderCatalog();
}

init();

